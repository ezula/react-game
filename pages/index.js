import Layout from "../components/Layout";
import Canvas from "../components/Canvas";
import styles from "./style.css"

const Main = (props) => {

    return (
        <Layout>
            <div className={styles.container}>
                <Canvas />
            </div>
        </Layout>
    )
}

export default Main;