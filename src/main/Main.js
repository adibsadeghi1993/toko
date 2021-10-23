import React, { Suspense } from 'react';
import { BoxLoader } from 'shared/controls/Loader';
import MainState from "main/state/MainState";
import AccessState from 'admin/access/state/AccessState';
import { Route, Switch } from 'react-router';


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
const AccessLazy = React.lazy(() => import("admin/access/Access"));
const Access = () => (
    <Suspense fallback={<BoxLoader loading />}>
        <AccessState>
            <AccessLazy />
        </AccessState>
    </Suspense>
);

//--------------------------------------------------------------------------
// App Main Load
const AppMain = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white relative xs-overflow-x-auto  xs:no-scrollbar justify-between flex-grow">
            {/* <HeaderPanel /> */}
            <PagesPanel />
            {/* <AppFooter /> */}
        </div >
    );
};
//--------------------------------------------------------------------------
const PagesPanel = React.memo(() => {
    return (
        <Switch>
            <Route exact path="/" component={Access} />
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