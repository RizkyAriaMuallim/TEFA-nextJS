const Card = ({title, description}) => {
    return (
        <div className="rounded-lg drop-shadow-2xl bg-slate-50 w-40 h-40 text-stone-900 text-sm p-3">
            Your title is {title} and the description is {description}
        </div>
    )
}

export default Card;