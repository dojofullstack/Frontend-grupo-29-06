

const Buscador = () => {
    return (
        <input placeholder="buscar productos" id="" name="" />
    )
}


const Header = ({props, data}) => {

    console.log(props);

    console.log(data);
    // aqui escribes logica js


    return (
        <header>
            <img height="50px" src="https://miro.medium.com/v2/resize:fit:1087/1*Ab2fthSpSt3homoXMAYkQg.png" alt="" srcset="" />
            <Buscador/>

            {props.map((item) => (
                <h3>{item}</h3>
            ))}

            <hr />

            {data.map((item) => {
                // logica
                return <h3>{item}</h3>
                })}

        </header>
    )

}



export default Header;