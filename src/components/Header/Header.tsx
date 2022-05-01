import { useNavigate } from "react-router-dom"

const Header = (props:any) => {
    const navigate = useNavigate()

    return (
        <div className="header">
            <img
                onClick={() => navigate('../', { replace: true })}
                src="/pokeball.png"
                alt="Pokemon ball"
            />
        </div>
    )
}

export default Header
