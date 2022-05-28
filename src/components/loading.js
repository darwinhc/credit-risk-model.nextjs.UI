import ReactLoading from 'react-loading';

const Loading = () => {

    return (
        <div className="position-absolute w-50" style={{marginTop: "10%", marginLeft: "25%"}}>
            <ReactLoading type="spin" height={150} width={100} color="blue" className="mx-auto"/> 
        </div>
    )
};

export default Loading;