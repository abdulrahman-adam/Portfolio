

export default function Footer() {


  return (
    <>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

      <div className="flex flex-col">
        

        {/* Footer */}
        <footer className="flex flex-col items-center justify-center w-full h-[200px] px-10 bg-gradient-to-b from-[#5524B7] to-[#380B60] text-white/70 mt-auto">
          <p className="mt-4 text-center text-red-500">
            Copyright © 2025{" "}
            <a href="https://abdulrahman-adam.com">ABDULRAHMAN</a>. Tous droits
            réservés.
          </p>
          <div className="flex items-center gap-4 mt-5 text-3xl">
            <a
              href="tel:0033651490377"
              className="hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="bi bi-telephone"></i>
            </a>
            <a
              href="mailto:abdulrahman939291@gmail.com"
              className="hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="bi bi-envelope"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/abdulrahman1993"
              className="hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/abdulrahman-adam"
              className="hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}
