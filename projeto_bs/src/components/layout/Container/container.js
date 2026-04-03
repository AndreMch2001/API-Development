import style from './container.module.css'

function container(props){
    return (
        <div>
            {props.children}
        </div>
    );
}

export default container