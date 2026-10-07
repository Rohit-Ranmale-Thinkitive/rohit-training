interface ToastProp {
    message:string;
}


function Toast({message} : ToastProp) {
     return (
        <div
            style={{
                position: "fixed",
                top: "20px",
                right: "20px",
                backgroundColor: "#333",
                color: "white",
                padding: "12px 20px",
                borderRadius: "6px",
            }}
            >
                {message}
        </div>
     )
}

export default Toast;