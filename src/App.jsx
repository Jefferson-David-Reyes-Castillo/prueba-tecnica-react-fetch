import { useEffect, useState } from "react";

export function App() {
  const RANDOM_FACT = "https://catfact.ninja/fact";

  const [fact, setFact] = useState("");
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    fetch(RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
        const primeraPalabra = fact.split(" ").slice(0, 1).join(" ");

        const URL = `https://cataas.com/cat/says/${primeraPalabra}`;
        setImageUrl(URL);
      });
  }, []);

  return (
    <>
      <main className='my-12 mx-10'>
        <div>
          <h1 className='font-bold text-3xl text-center text-white my-6'>
            Prueba Técnica
          </h1>
          <div className='bg-zinc-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto'>
            <p className='text-white text-lg mb-4'>La prueba pide:</p>
            <ul className='list-disc pl-5 space-y-2 text-white'>
              <li>De una API recupera un dato aleatorio de los gatos.</li>
              <li>
                Muestra una imagen de un gato que contenga la primera palabra
                del dato.
              </li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-8'>
          {fact && (
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-center mb-6'>
              <p className='text-gray-700 text-base'>{fact}</p>
            </div>
          )}

          {imageUrl && (
            <div className='bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full text-center mb-6'>
              <img
                className='rounded-lg'
                src={imageUrl}
                alt='Imagen de gatito'
              />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
