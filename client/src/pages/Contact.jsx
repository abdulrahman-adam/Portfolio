import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { backendUrl } from "../App";
import axios from "axios";
import { useAnimationTrigger } from "../context/AnimationProvider";
import { motion } from "framer-motion";

export default function Contact() {
  const { trigger } = useAnimationTrigger();

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
    const nameRegex = /^[A-Za-zÀ-ÿ\u0600-\u06FF\s'-]{2,}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Veuillez entrer votre nom.";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères (lettres uniquement).";
    }

    if (!formData.phone) {
      newErrors.phone = "Veuillez entrer votre numéro de téléphone.";
    } else if (!/^\+?[0-9]{8,15}$/.test(formData.phone)) {
      newErrors.phone = "Format de numéro invalide.";
    }

    if (!formData.email) {
      newErrors.email = "Veuillez entrer votre email.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = "Email invalide.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Veuillez rédiger votre message.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message trop court.";
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
        toast.success("🚀 Message envoyé avec succès. Je vous répondrai dans les plus brefs délais. ✉️");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        toast.error("Erreur");
      }
    } catch (error) {
      toast.error("Erreur serveur");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 ONLY ADDED (animation system)
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <motion.section
      key={trigger}
      initial="hidden"
      animate="show"
      variants={container}
      className="min-h-screen flex flex-col items-center bg-gray-50 py-16 px-6 lg:px-12"
    >

      {/* Header (ANIMATED ONLY WRAPPER ADDED) */}
      <motion.div variants={fadeUp} className="text-center max-w-2xl mb-12">
        <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
          Travaillons ensemble
        </h3>
        <p className="text-gray-600 text-lg">
          Vous avez un projet en tête ou une question ?
        </p>
      </motion.div>

      <motion.div
        variants={container}
        className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl"
      >

        {/* FORM (only wrapper animated) */}
        <motion.div variants={fadeUp} className="flex-[1.5] bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">

          <h4 className="text-xl font-bold text-indigo-600 mb-8 uppercase tracking-wider">
            Envoyer un Message
          </h4>

          <form className="space-y-5" onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-slate-700 mb-1">Nom Complet</label>
                <input
                  type="text"
                  name="name"
                  className="h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ex: John DOE"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
              </div>

              <div className="flex flex-col">
                <label className="text-sm font-semibold text-slate-700 mb-1">Téléphone</label>
                <input
                  type="text"
                  name="phone"
                  className="h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+33 6 00 00 00 00"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone}</p>}
              </div>

            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-slate-700 mb-1">E-mail</label>
              <input
                type="email"
                name="email"
                className="h-12 px-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.email}
                onChange={handleChange}
                placeholder="votre@email.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-slate-700 mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                className="p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                value={formData.message}
                onChange={handleChange}
                placeholder="Dites-moi comment je peux vous aider ..."
              />
              {errors.message && <p className="text-red-500 text-xs mt-1 ml-2">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl"
            >
              {loading ? "Traitement..." : "Envoyer le Message"}
            </button>

          </form>
        </motion.div>

        {/* INFO CARD (only wrapper animated) */}
        <motion.div variants={fadeUp} className="flex-1 flex flex-col gap-6">

          <div className="bg-indigo-900 p-8 md:p-10 rounded-2xl shadow-xl text-white h-full flex flex-col justify-center">

            <h2 className="text-2xl font-bold mb-6">Informations Directes</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-indigo-800 p-3 rounded-lg">
                  <i className="bi bi-envelope text-xl"></i>
                </div>
                <div>
                  <h5 className="text-indigo-100 text-sm font-medium">Email</h5>
                  <a className="break-all">
                    abdulrahman939291@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-indigo-800 p-3 rounded-lg">
                  <i className="bi bi-geo-alt text-xl"></i>
                </div>
                <div>
                  <h5 className="text-indigo-200 text-sm font-medium">Localisation</h5>
                  <p className="text-lg">Île-de-France</p>
                </div>
              </div>
            </div>

          </div>

        </motion.div>

      </motion.div>
    </motion.section>
  );
}