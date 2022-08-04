function Team({url, leadImg, leadName, leadLang}) {

    const handleClick = () =>{
        console.log("clicked")
    }

    return ( 

        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h3>Name</h3>
                <p>language</p>
                <div>
                    <i onClick={handleClick}>T</i>
                    <i onClick={handleClick}>F</i>
                    <i onClick={handleClick}>L</i>
                </div>
            </div>

        </div>
     );
}

export default Team;