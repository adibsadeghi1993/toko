import React, { Suspense, useContext } from "react";
import { Route, Switch, useLocation } from "react-router";
import { BoxLoader } from "shared/controls/Loader";
import HeaderPanel from "shared/controls/HeaderPanel";
import SideBar from "shared/controls/SideBar";
import {
  SessionContext,
  SessionProvider,
} from "shared/system-controls/session/SessionProvider";

import BlogState from "admin/blog/state/State";
import MainState from "main/state/MainState";
import ProfileState from "admin/profile/state/ProfileState";
import CategoryState from "admin/category/state/State";
import CompanyState from "admin/compoanies/state/State";
import NewsLetterState from "admin/newsletter/state/State";
import DashboardState from "admin/dashboard/state/State";
import AuthRoute from "shared/system-controls/route/AuthRoute";
import AuthState from "auth/state/State";
import Members from "admin/members/Members";
import Details from "admin/members/Details";
import Family from "admin/members/Family";
import FamilyId from "admin/members/FamilyId";
import Transaction from "admin/members/Transaction";
import chart from "admin/members/chart";
import Mainchart from "admin/members/Mainchart";
import Products from "admin/products/Products";
import Newproduct from "admin/products/Newproduct";
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
//----------------------------- Profile
const ProfileLazy = React.lazy(() => import("admin/profile/Profile"));
const Profile = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <ProfileState>
      <ProfileLazy />
    </ProfileState>
  </Suspense>
);
//----------------------------- Blog
const BlogLazy = React.lazy(() => import("admin/blog/Blog"));
const Blog = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <BlogState>
      <BlogLazy />
    </BlogState>
  </Suspense>
);

const AddBlogLazy = React.lazy(() => import("admin/blog/AddBlog"));
const AddBlog = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <BlogState>
      <AddBlogLazy />
    </BlogState>
  </Suspense>
);
//--------------------------------------------------------------------------
const CommentLazy = React.lazy(() => import("admin/blog/Comment"));
const Comment = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <BlogState>
      <CommentLazy />
    </BlogState>
  </Suspense>
);
//--------------------------------------------------------------------------
const CategoryLazy = React.lazy(() => import("admin/category/Category"));
const Category = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CategoryState>
      <CategoryLazy />
    </CategoryState>
  </Suspense>
);
//--------------------------------------------------------------------------
const AddCategoryLazy = React.lazy(() => import("admin/category/AddCategory"));
const AddCategory = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CategoryState>
      <AddCategoryLazy />
    </CategoryState>
  </Suspense>
);
//--------------------------------------------------------------------------
const CompaniesLazy = React.lazy(() => import("admin/compoanies/Companies"));
const Companies = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CompanyState>
      <CompaniesLazy />
    </CompanyState>
  </Suspense>
);
//--------------------------------------------------------------------------
const AddCompanyLazy = React.lazy(() => import("admin/compoanies/AddCompany"));
const AddCompany = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CompanyState>
      <AddCompanyLazy />
    </CompanyState>
  </Suspense>
);
//--------------------------------------------------------------------------
const EditCompanyLazy = React.lazy(() =>
  import("admin/compoanies/EditCompany")
);
const EditCompany = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CompanyState>
      <EditCompanyLazy />
    </CompanyState>
  </Suspense>
);
//--------------------------------------------------------------------------
const NewsLetterLazy = React.lazy(() => import("admin/newsletter/NewLetter"));
const NewsLetter = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <NewsLetterState>
      <NewsLetterLazy />
    </NewsLetterState>
  </Suspense>
);
//--------------------------------------------------------------------------
const DashboardLazy = React.lazy(() => import("admin/dashboard/Dashboard"));
const Dashboard = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <DashboardState>
      <DashboardLazy />
    </DashboardState>
  </Suspense>
);
//--------------------------------------------------------------------------
const SignInLazy = React.lazy(() => import("auth/SignIn"));
const SignIn = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <AuthState>
      <SignInLazy />
    </AuthState>
  </Suspense>
);
// App Main Load
const AppMain = () => {
  const { sessionActive } = useContext(SessionContext);
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col bg-white relative xs-overflow-x-auto  xs:no-scrollbar">
      {location.pathname.indexOf("/sign-in") < 0 && <SideBar />}
      {location.pathname.indexOf("/sign-in") < 0 && (
        <div className="relative md:mr-250">
          <div className="flex flex-row ">
            <HeaderPanel />
          </div>
          <div className="relative">
            <PagesPanel sessionActive={sessionActive} />
          </div>
        </div>
      )}
      {location.pathname.indexOf("/sign-in") >= 0 && (
        <PagesPanel sessionActive={sessionActive} />
      )}

      {/* <AppFooter /> */}
    </div>
  );
};
//--------------------------------------------------------------------------
const PagesPanel = React.memo(({ sessionActive }) => {
  return (
    <Switch>
      <Route exact path="/sign-in" component={SignIn} />
      <AuthRoute
        exact
        path="/news-letter"
        isAuthenticated={sessionActive}
        component={NewsLetter}
      />
      <AuthRoute
        exact
        path="/companies/add"
        isAuthenticated={sessionActive}
        component={AddCompany}
      />
      <AuthRoute
        exact
        path="/company/:id"
        isAuthenticated={sessionActive}
        component={EditCompany}
      />
      <AuthRoute
        exact
        path="/companies"
        isAuthenticated={sessionActive}
        component={Companies}
      />
      <AuthRoute
        exact
        path="/category"
        isAuthenticated={sessionActive}
        component={Category}
      />
      <AuthRoute
        exact
        path="/blog/add"
        isAuthenticated={sessionActive}
        component={AddBlog}
      />
      <AuthRoute
        exact
        path="/blog/comment"
        isAuthenticated={sessionActive}
        component={Comment}
      />
      <AuthRoute
        exact
        path="/blog"
        isAuthenticated={sessionActive}
        component={Blog}
      />
      <AuthRoute
        exact
        path="/dashboard"
        isAuthenticated={sessionActive}
        component={Dashboard}
      />
      <AuthRoute
        exact
        path="/members"
        isAuthenticated={sessionActive}
        component={Members}
      />
      <AuthRoute
        exact
        path="/members/details"
        isAuthenticated={sessionActive}
        component={Details}
      />
      <AuthRoute
        exact
        path="/members/family"
        isAuthenticated={sessionActive}
        component={Family}
      />
      <AuthRoute
        exact
        path="/members/id"
        isAuthenticated={sessionActive}
        component={FamilyId}
      />
      <AuthRoute
        exact
        path="/members/transactions"
        isAuthenticated={sessionActive}
        component={Transaction}
      />
      <AuthRoute
        exact
        path="/members/chart"
        isAuthenticated={sessionActive}
        component={chart}
      />
      <AuthRoute
        exact
        path="/members/maincharts"
        isAuthenticated={sessionActive}
        component={Mainchart}
      />
      <AuthRoute
        exact
        path="/products"
        isAuthenticated={sessionActive}
        component={Products}
      />
      <AuthRoute
        exact
        path="/products/add"
        isAuthenticated={sessionActive}
        component={Newproduct}
      />
    </Switch>
  );
});

const Main = React.memo((props) => {
  return (
    <ErrorBoundary>
      <SessionProvider sessionName="ADMIN_APP">
        <MainState>
          <AppMain {...props} />
        </MainState>
      </SessionProvider>
    </ErrorBoundary>
  );
});

export default Main;
