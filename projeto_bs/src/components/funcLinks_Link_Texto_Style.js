import { Link } from 'react-router-dom';

function LinksPainelLateral({ Lnk, TextoLink, style }) {
    return (
        <a href={Lnk} style={style}>
            {TextoLink}
        </a>
    );
}
export default LinksPainelLateral;