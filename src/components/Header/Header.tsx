import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

    return (
        <header className="header">
            <img
                onClick={() => navigate('../', { replace: true })}
                src="/pokeball.png"
                alt="Pokemon ball"
            />
        </header>
    )
}

export default Header
