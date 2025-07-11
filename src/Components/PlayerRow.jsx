import { memo } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";


const PlayerRow = ({ player }) => {
    const { handleFavorite, favList } = useContext(GlobalContext);
    let roleClass = "";
    let roleLetter = "";
    switch (player.category) {
        case "Attaccante":
            roleClass = "red circle";
            roleLetter = "A";
            break;
        case "Centrocampista":
            roleClass = "blue circle";
            roleLetter = "C";
            break;
        case "Difensore":
            roleClass = "green circle";
            roleLetter = "D";
            break;
        case "Portiere":
            roleClass = "orange circle";
            roleLetter = "P";
            break;
        default:
            roleClass = "";
            roleLetter = "";
    }

    return (
        <tr>
            <td><p className={roleClass}>{roleLetter}</p></td>
            <td><Link to={`/details/${player.id}`}>{player.title}</Link></td>
            <td>
                <button
                    className={`${favList.includes(player.id) ? "favorite" : ""} favoriteButton`}
                    onClick={() => handleFavorite(player.id)}
                >
                    &#x2665;
                </button>
            </td>
        </tr>
    );
};
export default memo(PlayerRow);
