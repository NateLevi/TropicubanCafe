// PhotoSection.jsx
const PhotoSection = () => {
    return (
      <section
        className="h-screen bg-center bg-cover bg-fixed bg-no-repeat"
        style={{
          backgroundImage: "url('/public/maincuban.jpg')",
        }}
      >
        <div className="w-full h-full bg-black/20 flex items-center justify-center">
        </div>
      </section>
    );
  };
  
  export default PhotoSection;
  