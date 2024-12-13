import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import TermsOfServicePage from "./TOS";
import PrivacyPolicyPage from "./PrivacyPolicy";
import NotFound from "./404";
import PhishingInfo from "./CyberInfo";
import SFTPInfo from "./SFTPInfo";
import TicketInfo from "./TicketInfo";
import AssetManagementInfo from "./AssetManagementInfo";
import MFAInfo from "./MFAInfo";
import PlanningInfo from "./PlanningInfo";
import ManagedInfo from "./ManagedInfo";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/cyber-info" element={<PhishingInfo />} />
        <Route path="/sftp-info" element={<SFTPInfo />} />
        <Route path="/ticket-info" element={<TicketInfo />} />
        <Route path="/assetmgmt-info" element={<AssetManagementInfo />} />
        <Route path="/mfa-info" element={<MFAInfo />} />
        <Route path="/plan-info" element={<PlanningInfo />} />
        <Route path="/managed-info" element={<ManagedInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
