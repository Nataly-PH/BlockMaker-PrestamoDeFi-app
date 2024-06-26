

export default function Header(){
    return (
        <header className="border-b shadow py-2 px-3 bg-purple-200 flex justify-between items-center">
            {/* Logo para version mobile */}
            <img src="../../public/blockmaker-full-logo.png" alt="blockmaker-full-logo.png-mobile" className="sm:hidden" width={47}></img>
        
            {/* logo para version desktop */}
            <div className="hidden sm:flex items-center">
                <img src="../../public/blockmaker-full-logo.png" alt="blockmaker-full-logo.png-desktop" className="hidden sm:block" width={47}></img>
                <span className="text-sm font-bold ml-2">Blockmaker PrestamoDeFi</span>

            </div>
            <button className="bg-gray-100 rounded-xl px-2 text-sm h-fit py-2">Connect Wallet</button>
        
        
        </header>
    )
}