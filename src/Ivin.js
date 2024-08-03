function Ivinteach() {
    let theni = "Theni";

    return (
    <button>
            I'm a button {theni}
        </button>
    );
}
console.log('Button clicked');
const Haerriz =()=>{
    let hello ="new ivin";
    return (
        <>
            <button>
                Haerriz
            </button>
            <div>
                <Ivinteach test={hello}/>
            </div>
            <button onClick={() => console.log('Button clicked')}>
                try clicking, see console
            </button>

        </>

    )
}
Ivinteach();

// export default Ivinteach;
export default Haerriz;
