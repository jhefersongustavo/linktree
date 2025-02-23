function App(){
  return(
    <div className="flex flex-col w-full py-4 items-center justify-center">
      <img className="rounded-full w-70 h-70 max-w-xs mx-auto mix-blend-multiply"src="https://i.pinimg.com/736x/0c/a9/d4/0ca9d4857c5829d3cec4c1269ded1de4.jpg" alt="icone engenharia"/>
      <h1 className="flex items-center justify-center text-2xl font-bold"> Marcos Souza Engenharia</h1>
      
      <main className="flex flex-col w-11/12 max-w-xl text-center">
        <section className="bg-white mb-4 w-full py-2 rounded-lg transition-transform hover:scale-105 mt-10">
          <a href="https://www.instagram.com/marcosouzz?igsh=Y2dkajJlN3VmdHdn" target="_blank">
            <p>
              Instagram
            </p>
          </a>
        </section>
        <section className="bg-green-500 mb-4 w-full py-2 rounded-lg transition-transform hover:scale-105">
          <a href="https://wa.me/553387506037" target="_blanck">
            <p>
              WhatsApp
            </p>
          </a>
        </section>
        <section className="bg-blue-900 mb-4 w-full py-2 rounded-lg transition-transform hover:scale-105">
          <a>
            <p className="text-white">
              portfólio 
            </p>
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
