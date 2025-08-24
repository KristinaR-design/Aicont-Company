export default function Page({ title, description, advantages, bgClass }) {
    return (
        <section className={`page-section ${bgClass}`}>
            <h1>{title}</h1>
            <p className="desc">{description}</p>
            <ul className="advantages">
                {advantages.map((adv, i) => <li key={i}>{adv}</li>)}
            </ul>
        </section>
    )
} 