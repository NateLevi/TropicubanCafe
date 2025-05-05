// PhotoSection.jsx
const PhotoSection = () => {
    return (
      <section
        className="h-[50vh] lg:h-screen bg-center bg-cover bg-scroll lg:bg-fixed bg-no-repeat"
        style={{
          backgroundImage: "url('/maincuban.jpg')",
        }}
      >
        <div className="w-full h-full bg-black/20 flex items-center justify-center">
        </div>
      </section>
    );
  };
  
  export default PhotoSection;
  