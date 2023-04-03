function NavBar ({pokemonTab, pokemonI, next, back}) {
    return (
    <div>
        {pokemonI > 0 ? <button onClick ={back}>Précédent</button > : ""}
        {pokemonI < pokemonTab.length - 1 ? <button onClick ={next}>Suivant</button > : ""}
    </div>
    );
}




export default NavBar;