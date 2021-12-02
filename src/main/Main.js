import React, { Suspense } from "react";
import { Route, Switch } from "react-router";
import { BoxLoader } from "shared/controls/Loader";
import HeaderPanel from "shared/controls/HeaderPanel";
import SideBar from "shared/controls/SideBar";
import { SessionProvider } from "shared/system-controls/session/SessionProvider";

import BlogState from "admin/blog/state/State";
import MainState from "main/state/MainState";
import ProfileState from "admin/profile/state/ProfileState";
import CategoryState from "admin/category/state/State";
import CompanyState from "admin/compoanies/state/State";
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
// App Main Load
const AppMain = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white relative xs-overflow-x-auto  xs:no-scrollbar">
      <SideBar />
      <div className="relative md:mr-250">
        <div className="flex flex-row ">
          <HeaderPanel />
        </div>
        <div className="relative">
          <PagesPanel />
        </div>
      </div>
      {/* <AppFooter /> */}
    </div>
  );
};
//--------------------------------------------------------------------------
const PagesPanel = React.memo(() => {
  return (
    <Switch>
      <Route exact path="/blog/add" component={AddBlog} />
      <Route exact path="/blog/comment" component={Comment} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/category" component={Category} />
      <Route exact path="/category/add" component={AddCategory} />
      {/* Companies */}

      <Route exact path="/companies" component={Companies} />
      {/* <Route exact path="/" component={Profile} /> */}
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
