import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backendUrl } from "../App";

export default function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${backendUrl}/contact/list`);
      if (data.success) {
        setContacts(data.contacts);
      } else {
        toast.error("❌ Impossible de récupérer les contacts.");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Erreur serveur lors du chargement.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleRemove = async (id) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce contact ?")) return;
    try {
      const { data } = await axios.post(`${backendUrl}/contact/remove`, { id });
      if (data.success) {
        setContacts(contacts.filter((c) => c._id !== id));
        toast.success("✅ Contact supprimé avec succès !");
      } else {
        toast.error("❌ Impossible de supprimer le contact.");
      }
    } catch (error) {
      console.error(error);
      toast.error("⚠️ Erreur serveur lors de la suppression.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <h1 className="text-3xl font-bold text-purple-700 mb-6 text-center">
        Liste des Contacts
      </h1>

      {loading ? (
        <p className="text-center">Chargement...</p>
      ) : (
        <>
          {/* Desktop / Tablet Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md border border-gray-200">
              <thead>
                <tr className="bg-purple-600 text-white text-left">
                  <th className="p-3">Nom</th>
                  <th className="p-3">Téléphone</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Message</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id} className="border-b hover:bg-purple-50 transition">
                    <td className="p-3">{contact.name}</td>
                    <td className="p-3">{contact.phone}</td>
                    <td className="p-3">{contact.email}</td>
                    <td className="p-3">{contact.message}</td>
                    <td className="p-3 text-center">
                      <button
                        onClick={() => handleRemove(contact._id)}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                      >
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                className="bg-white rounded-lg shadow-md p-4 border border-gray-200"
              >
                <h2 className="text-lg font-bold text-purple-700">{contact.name}</h2>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Téléphone:</span> {contact.phone}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Email:</span> {contact.email}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Message:</span> {contact.message}
                </p>
                <button
                  onClick={() => handleRemove(contact._id)}
                  className="mt-2 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition w-full"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
