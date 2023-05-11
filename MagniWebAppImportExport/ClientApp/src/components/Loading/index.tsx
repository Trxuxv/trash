import './style.css'

type Prop = {
    children: boolean;
};

const Loading = (prop: Prop) => {
    return (
        <div>
            {prop.children === true ? (
                <div className="bg-black w-full z-50 h-screen left-0 flex items-center justify-center fixed top-0" style={{ background: '#00000070' }}>
                    <div className=" p-10 flex items-center justify-center flex-col">
                        <div className="loader absolute shadow-md mb-10"></div>
                    </div>
                </div>
            ) : (<> </>)}
        </div>
    );
}

export default Loading;