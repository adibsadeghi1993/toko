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
import Transaction from "admin/members/Transaction";
import chart from "admin/members/MemberChart";
import Mainchart from "admin/members/Mainchart";
import Newproduct from "admin/products/Newproduct";
import SaleState from "admin/sale/state/SaleState";
import TransactionState from "admin/transactions/invite/state/TransactionState";
import TransactionSaleState from "admin/transactions/sale/state/SaleTransactionsState";
// import { SaleTransactionsProvider } from "admin/transactions/sale/state/State";
import PaymentsState from "admin/payments/state/InstallmentState";
//add
import MemmberState from "admin/members/state/State";
import AccessState from "admin/access/state/AccessState";
import PromotersState from "admin/promoters/state/State";
import ProductState from "admin/products/state/State";
import { CampaignState } from "admin/campaign/state/State";
import CategoryProductState from "admin/categoryProduct/state/State";
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

//--------------------------------------------------------------------------
const AddBlogLazy = React.lazy(() => import("admin/blog/AddBlog"));
const AddBlog = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <BlogState>
      <AddBlogLazy />
    </BlogState>
  </Suspense>
);
//--------------------------------------------------------------------------
const UpdateBloglazy = React.lazy(() => import("admin/blog/UpdateBlog"));
const UpdateBlog = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <BlogState>
      <UpdateBloglazy />
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
const EditCategoryLazy = React.lazy(() =>
  import("admin/category/EditCategory")
);
const EditCategory = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CategoryState>
      <EditCategoryLazy />
    </CategoryState>
  </Suspense>
);
//--------------------------------------------------------------------------
const SaleLazy = React.lazy(() => import("admin/sale/Sales"));
const Sale = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <SaleState>
      <SaleLazy />
    </SaleState>
  </Suspense>
);
//----------------------------------Transactions invite friends section-----------------------------------
const TransactionsLazy = React.lazy(() =>
  import("admin/transactions/invite/Transactions")
);
const Transactions = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <TransactionState>
      <TransactionsLazy />
    </TransactionState>
  </Suspense>
);
//----------------------------------Transactions sale section-----------------------------------
const TransactionsSaleLazy = React.lazy(() =>
  import("admin/transactions/sale/SaleTransactions")
);
const TransactionsSale = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <TransactionSaleState>
      <TransactionsSaleLazy />
    </TransactionSaleState>
  </Suspense>
);

//---------------------------------- Payments -----------------------------------
const PaymentsLazy = React.lazy(() => import("admin/payments/Installment"));
const Payments = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <PaymentsState>
      <PaymentsLazy />
    </PaymentsState>
  </Suspense>
);
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
//--------------------------------------------------------------------------
const MemmbersLazy = React.lazy(() => import("admin/members/Members"));
const Memmbers = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <MemmberState>
      <MemmbersLazy />
    </MemmberState>
  </Suspense>
);
//--------------------------------------------------------------------------
const DetailsLazy = React.lazy(() => import("admin/members/Details"));
const Details = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <MemmberState>
      <DetailsLazy />
    </MemmberState>
  </Suspense>
);
// Promoter
//--------------------------------------------------------------------------
const PromoterLazy = React.lazy(() => import("admin/promoters/Promoter"));
const Promoter = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <PromotersState>
      <PromoterLazy />
    </PromotersState>
  </Suspense>
);

// Families
//--------------------------------------------------------------------------
const FamiliesLazy = React.lazy(() => import("admin/members/Families"));
const Families = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <MemmberState>
      <FamiliesLazy />
    </MemmberState>
  </Suspense>
);
// Families
//--------------------------------------------------------------------------
const FamilyDetailsLazy = React.lazy(() =>
  import("admin/members/FamilyDetails")
);
const FamilyDetails = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <MemmberState>
      <FamilyDetailsLazy />
    </MemmberState>
  </Suspense>
);

//--------------------------------------------------------------------------
const AccessLazy = React.lazy(() => import("admin/access/Access"));
const Access = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <AccessState>
      <AccessLazy />
    </AccessState>
  </Suspense>
);
//--------------------------------------------------------------------------
const MemberChartLazy = React.lazy(() => import("admin/members/MemberChart"));
const MemberChart = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <MemmberState>
      <MemberChartLazy />
    </MemmberState>
  </Suspense>
);
//--------------------------------------------------------------------------
const MemberMainchartsLazy = React.lazy(() =>
  import("admin/members/Mainchart")
);
const MemberMaincharts = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <MemmberState>
      <MemberMainchartsLazy />
    </MemmberState>
  </Suspense>
);
//--------------------------------------------------------------------------
const ProductLazy = React.lazy(() => import("admin/products/Products"));
const Products = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <ProductState>
      <ProductLazy />
    </ProductState>
  </Suspense>
);
//--------------------------------------------------------------------------
const ProductDetailsLazy = React.lazy(() =>
  import("admin/products/ProductDetailes")
);
const ProductDetails = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <ProductState>
      <ProductDetailsLazy />
    </ProductState>
  </Suspense>
);
//--------------------------------------------------------------------------
const AddCampaignLazy = React.lazy(() => import("admin/campaign/AddCampaign"));
const AddCampaign = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CampaignState>
      <AddCampaignLazy />
    </CampaignState>
  </Suspense>
);
//--------------------------------------------------------------------------
const UpdateCampaignLazy = React.lazy(() =>
  import("admin/campaign/UpdateCampaign")
);
const UpdateCampaign = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CampaignState>
      <UpdateCampaignLazy />
    </CampaignState>
  </Suspense>
);
//--------------------------------------------------------------------------
const CampaignLazy = React.lazy(() => import("admin/campaign/Campaigns"));
const Campaigns = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CampaignState>
      <CampaignLazy />
    </CampaignState>
  </Suspense>
);
//--------------------------------------------------------------------------
const CategoryProductLazy = React.lazy(() =>
  import("admin/categoryProduct/CategoryProduct")
);
const CategoryProduct = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CategoryProductState>
      <CategoryProductLazy />
    </CategoryProductState>
  </Suspense>
);
//--------------------------------------------------------------------------
const EditCategoryProductLazy = React.lazy(() =>
  import("admin/categoryProduct/EditCategoryProduct")
);
const EditCategoryProduct = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CategoryProductState>
      <EditCategoryProductLazy />
    </CategoryProductState>
  </Suspense>
);
//--------------------------------------------------------------------------
const AddCategoryProductLazy = React.lazy(() =>
  import("admin/categoryProduct/AddCategoryProduct")
);
const AddCategoryProduct = () => (
  <Suspense fallback={<BoxLoader loading />}>
    <CategoryProductState>
      <AddCategoryProductLazy />
    </CategoryProductState>
  </Suspense>
);
//--------------------------------------------------------------------------

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
      <AuthRoute
        isAuthenticated={sessionActive}
        exact
        path="/members/transactions"
        component={Transaction}
      />
      <AuthRoute
        isAuthenticated={sessionActive}
        exact
        path="/sale"
        component={Sale}
      />
      <AuthRoute
        isAuthenticated={sessionActive}
        exact
        path="/transactions/invite"
        component={Transactions}
      />
      <AuthRoute
        exact
        path="/transactions/sale"
        component={TransactionsSale}
        isAuthenticated={sessionActive}
      />
      <AuthRoute
        isAuthenticated={sessionActive}
        exact
        path="/payments"
        component={Payments}
      />

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
        path="/category/add"
        isAuthenticated={sessionActive}
        component={AddCategory}
      />
      <AuthRoute
        exact
        path="/category/:id"
        isAuthenticated={sessionActive}
        component={EditCategory}
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
        path="/blog/edit/:id"
        isAuthenticated={sessionActive}
        component={UpdateBlog}
      />
      <AuthRoute
        exact
        path="/promoters"
        isAuthenticated={sessionActive}
        component={Promoter}
      />
      <AuthRoute
        exact
        path="/"
        isAuthenticated={sessionActive}
        component={Dashboard}
      />
      <AuthRoute
        exact
        path="/members"
        isAuthenticated={sessionActive}
        component={Memmbers}
      />
      <AuthRoute
        exact
        path="/members/details/:id"
        isAuthenticated={sessionActive}
        component={Details}
      />
      <AuthRoute
        exact
        path="/members/:id/families"
        isAuthenticated={sessionActive}
        component={Families}
      />
      <AuthRoute
        exact
        path="/members/:id/family/:family_id"
        isAuthenticated={sessionActive}
        component={FamilyDetails}
      />
      <AuthRoute
        exact
        path="/members/transactions"
        isAuthenticated={sessionActive}
        component={Transaction}
      />
      <AuthRoute
        exact
        path="/members/chart/:id"
        isAuthenticated={sessionActive}
        component={MemberChart}
      />
      <AuthRoute
        exact
        path="/members/maincharts"
        isAuthenticated={sessionActive}
        component={MemberMaincharts}
      />
      <AuthRoute
        exact
        path="/members/access/:id"
        isAuthenticated={sessionActive}
        component={Access}
      />
      <AuthRoute
        exact
        path="/products"
        isAuthenticated={sessionActive}
        component={Products}
      />
      <AuthRoute
        exact
        path="/product/details/:id"
        isAuthenticated={sessionActive}
        component={ProductDetails}
      />
      <AuthRoute
        exact
        path="/products/add"
        isAuthenticated={sessionActive}
        component={Newproduct}
      />
      <AuthRoute
        exact
        path="/campaign/add"
        isAuthenticated={sessionActive}
        component={AddCampaign}
      />
      <AuthRoute
        exact
        path="/campaign/edit/:id"
        isAuthenticated={sessionActive}
        component={UpdateCampaign}
      />
      <AuthRoute
        exact
        path="/campaigns"
        isAuthenticated={sessionActive}
        component={Campaigns}
      />
      <AuthRoute
        exact
        path="/product/category"
        isAuthenticated={sessionActive}
        component={CategoryProduct}
      />
      <AuthRoute
        exact
        path="/product/category/:id"
        isAuthenticated={sessionActive}
        component={EditCategoryProduct}
      />
      <AuthRoute
        exact
        path="/product/add/category"
        isAuthenticated={sessionActive}
        component={AddCategoryProduct}
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
