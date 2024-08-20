export const Rappel = () => {

    return (

        <>
        <div className="bg-[#091928]">
            <h1>Rappel pour le coucher</h1>
        </div>
        <div className="">
            <input type="checkbox" />
            <label htmlFor="Rap1">
                Rappel toutes les 5 minutes
            </label>
        </div>
        <div className="">
            <input type="checkbox" />
            <label htmlFor="Rap2">
                Rappel toutes les 10 minutes
            </label>
        </div>
        <div className="">
            <input type="checkbox" />
            <label htmlFor="Rap3">
                Rappel toutes les 15 minutes
            </label>
        </div>
<div className="">
    <h1>A propos</h1>
</div>
<div className="">
    <p>Cette option permet d'activé un rappel qui se déclenchera selon l'interval choisis</p>
</div>
        </>
    )
}