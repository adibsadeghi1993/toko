import React, { Suspense } from 'react';
import { BoxLoader } from 'shared/controls/Loader';
import MainState from "main/state/MainState";
import ProfileState from 'admin/profile/state/ProfileState';
import { Route, Switch } from 'react-router';
import HeaderPanel from 'shared/controls/HeaderPanel';
import SideBar from 'shared/controls/SideBar';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            // window.location="/";
            return <></>;
        }

        return this.props.children;
    }
}
//-----------------------------
const ProfileLazy = React.lazy(() => import("admin/profile/Profile"));
const Profile = () => (
    <Suspense fallback={<BoxLoader loading />}>
        <ProfileState>
            <ProfileLazy />
        </ProfileState>
    </Suspense>
);

//--------------------------------------------------------------------------
// App Main Load
const AppMain = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white relative xs-overflow-x-auto  xs:no-scrollbar justify-between flex-grow">
            <div className="flex flex-row">
                <HeaderPanel />
            </div>
            <PagesPanel />
            <div className="flex-grow" />
            <div className="footer mt-4 w-full h-5">

            </div>
            {/* <AppFooter /> */}
        </div >
    );
};
//--------------------------------------------------------------------------
const PagesPanel = React.memo(() => {
    return (
        <Switch>
            <Route exact path="/" component={Profile} />
        </Switch>
    );
});

const Main = React.memo((props) => {
    return (
        <ErrorBoundary>
            <MainState>
                <AppMain {...props} />
            </MainState>
        </ErrorBoundary>
    )
})

export default Main;