import '../Styles/topSellers.css';

const topSellersData = ["Photo Tees", "Kids Tees", "Family Tees"];

export default function TopSellers() {
    return (
        <>
            <table className="top-sellers" border={1}>
                <tbody>
                {topSellersData.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
}