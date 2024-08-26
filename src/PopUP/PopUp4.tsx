import { useState } from "react"

export const PopUp4 = () => { 
    const [popUp, setPopUp] = useState(false)

    const togglePopUp = () => {
        setPopUp(!popUp)
    }

    return (
        <>
            <button 
                onClick={togglePopUp} 
                className="fixed top-4 left-4 btn-modal px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300">
                Aide
            </button>
            {popUp && (
                <div className="modal fixed inset-0 flex items-center justify-center z-50">
                    <div 
                        className="overlay fixed inset-0 bg-gray-900 opacity-50"
                        onClick={togglePopUp}>
                    </div>
                    <div className="modal-content relative bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto ">
                        <h1 className="text-2xl text-gray-800 font-semibold mb-4 text-center">Parametre</h1>
                        <p className="text-gray-600 mb-6 text-center">
                            Ici, vous pourrez accéder aux paramètres et les personnaliser afin de convenir à votre profil.
                        </p>
                        <button 
                            className="close-modal absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={togglePopUp}>
                            &times;
                        </button>
                    </div>
                </div>  
            )}
        </>
    )
}
