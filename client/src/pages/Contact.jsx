import { useState } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Veuillez entrer votre nom.";
    } else if (formData.name.length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères.";
    }

    if (!formData.phone) {
      newErrors.phone = "Veuillez entrer votre numéro de téléphone.";
    } else if (!/^\+?[0-9]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Votre numéro de téléphone est invalide.";
    }

    if (!formData.email) {
      newErrors.email = "Veuillez entrer votre email.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Adresse email invalide.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Veuillez entrer votre message.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    setLoading(true);

    const res = await axios.post(`${backendUrl}/contact/add`, formData, {
      headers: { "Content-Type": "application/json" }
    });

    if (res.data.success) {
      toast.success("✅ Merci ! Votre message a été envoyé.");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      toast.error("❌ Une erreur est survenue. Réessayez plus tard.");
    }
  } catch (error) {
    console.error(error);
    toast.error("⚠️ Erreur serveur. Vérifiez votre connexion.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 py-16 px-4">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Restons en contact.
      </h3>
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl">
        {/* Form */}
        <div className="flex-1 bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <h4 className="text-2xl font-semibold mb-6">Envoyer un message</h4>
          <form
            className="flex flex-col items-center text-sm text-slate-800 w-full"
            onSubmit={handleSubmit}
          >
            <div className="w-full max-w-md px-2 sm:px-4">
              {/* Name */}
              <label htmlFor="name" className="font-medium">
                Nom
              </label>
              <input
                type="text"
                name="name"
                className="mt-2 mb-1 h-10 px-3 w-full border border-slate-300 rounded-full outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Entrez votre nom"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mb-2">{errors.name}</p>
              )}

              {/* Phone */}
              <label htmlFor="phone" className="font-medium">
                Téléphone
              </label>
              <input
                type="text"
                name="phone"
                className="mt-2 mb-1 h-10 px-3 w-full border border-slate-300 rounded-full outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Entrez votre téléphone"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mb-2">{errors.phone}</p>
              )}

              {/* Email */}
              <label htmlFor="email" className="font-medium mt-4">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="mt-2 mb-1 h-10 px-3 w-full border border-slate-300 rounded-full outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Entrez votre adresse email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mb-2">{errors.email}</p>
              )}

              {/* Message */}
              <label htmlFor="message" className="font-medium mt-4">
                Message
              </label>
              <textarea
                name="message"
                rows="4"
                className="mt-2 mb-1 p-2 w-full border border-slate-300 rounded-lg resize-none outline-none focus:ring-2 focus:ring-indigo-400 transition"
                placeholder="Entrez votre message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mb-2">{errors.message}</p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition disabled:opacity-50"
              >
                {loading ? "Envoi..." : "Soumettre"}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 justify-center">
          <h2 className="text-2xl font-semibold mb-4">
            Informations de contact
          </h2>
          <div className="flex items-center gap-4 text-lg">
            <i className="bi bi-telephone-fill text-purple-600 text-2xl"></i>
            <a
              href="tel:0033651490377"
              className="text-blue-600 text-sm hover:underline"
            >
              06 51 49 03 77
            </a>
          </div>
          <div className="flex items-center gap-4 text-lg">
            <i className="bi bi-envelope-fill text-purple-600 text-2xl"></i>
            <a
              href="mailto:abdulrahman939291@gmail.com"
              className="text-blue-600 text-sm hover:underline"
            >
              abdulrahman939291@gmail.com
            </a>
          </div>
          <p className="mt-6 text-gray-600 text-sm">
            Vous pouvez nous contacter par téléphone ou par email, ou remplir le
            formulaire ci-contre et nous vous répondrons dans les plus brefs délais.
          </p>
        </div>
      </div>
    </div>
  );
}
