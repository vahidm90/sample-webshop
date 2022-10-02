import UserThumbnail from "../../user/components/user-thumbnail.component";

function TopBar() {
    return (
        <header className="app-header flex-container ai-center">
            <h1 className="p-1 m-0 fw-400">A Sample Web Shop!</h1>
            <div className="p-1 m-l-auto">
                <UserThumbnail/>
            </div>
        </header>
    );
}

export default TopBar;