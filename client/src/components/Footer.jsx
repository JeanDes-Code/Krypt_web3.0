import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-32" />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        {' '}
                        Marché{' '}
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        {' '}
                        Echanger{' '}
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        {' '}
                        Tutoriels{' '}
                    </p>
                    <p className="text-white text-base text-center mx-2 cursor-pointer">
                        {' '}
                        Portefeuilles{' '}
                    </p>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">
                    {' '}
                    Rejoignez-nous{' '}
                </p>
                <p className="text-white text-sm text-center">
                    info@krypto-app.jean-desauw.fr
                </p>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-sm text-center">
                    @Krypto-app 2022
                </p>
                <p className="text-white text-sm text-center">
                    Tous droits réservés.
                </p>
            </div>
        </div>
    )
}

export default Footer
