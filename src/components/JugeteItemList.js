const JugeteItemList = ({ nombre, descripcion, edadminima, compañia, precio }) => {
    return (
        <div className="card w-15 bg-base-100 shadow-xl mb-4 bg-white">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body bg-white">
            <h2 className="card-title">Id!</h2>
            <p>Nombre: {nombre}</p>
                <span>Descripcion: { descripcion}</span> 
            <span>Edad minima: { edadminima}</span>
            <span>Compañia: { compañia}</span>
                <span>Precio: { precio}</span>
          </div>
          <div class="flex flex-col items-center pb-2">
            <div class="flex mt-2 space-x-3 md:mt-2">
              <label
                htmlFor="my-modal-3"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Editar
              </label>
              <label
                htmlFor="my-modal-4"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
              >
                Eliminar
              </label>
            </div>
          </div>
        </div>
    )
}

export default JugeteItemList