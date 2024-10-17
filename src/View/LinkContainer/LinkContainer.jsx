import { ColumnContainer } from "../ColumnContainer";
import { Link } from "../../components/UI/Link";

export const LinkContainer = () => {
    return (
        <div style={{ padding: '20px' }}>
            <h3>Link Component</h3>
            <ColumnContainer>
                <Link href="#" state="default">Link</Link>
                <Link href="#" state="disabled">Link</Link>
            </ColumnContainer>
        </div>
    );
}