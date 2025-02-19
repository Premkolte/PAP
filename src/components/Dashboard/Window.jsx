import React from "react";
import ButtonSnippets from "../SnippetComponents/ButtonSnippets";
import CardSnippets from "../SnippetComponents/CardSnippets";
import DropdownSnippetCard from "../SnippetComponents/DropdownSnippets";
import InputFieldSnippets from "../SnippetComponents/InputfieldSnippets";
import CheckboxSnippets from "../SnippetComponents/CheckboxSnippets";
import RadioSnippets from "../SnippetComponents/RadioSnippets";
import LoginSnippets from "../SnippetComponents/LoginSnippets";
import SignupSnippets from "../SnippetComponents/SignupSnippets";
import ToggleSwitchSnippets from "../SnippetComponents/ToggleSwitchSnippets";
import SlideshowSnippets from "../SnippetComponents/SlideShowSnippets";
import BoxShadowSnippets from "../SnippetComponents/BoxShadowSnippets";
import TextSnippets from "../SnippetComponents/TextSnippets";
import SocialSnippets from "../SnippetComponents/SocialSnippets";
import FormSnippets from "../SnippetComponents/FormSnippets";
import ProgressBarSnippets from "../SnippetComponents/ProgressBarSnippets";
import NavbarIconSnippets from "../SnippetComponents/NavbarIconSnippets";
import DarkModeSnippets from "../SnippetComponents/DarkModeSnippets";
import AnimationSnippets from "../SnippetComponents/AnimationSnippets";
import TableSnippets from "../SnippetComponents/TableSnippets";
import ResponsivenessSnippets from "../SnippetComponents/ResponsivenessSnippets";
import FooterSnippets from "../SnippetComponents/FooterSnippets";
import BadgeSnippets from "../SnippetComponents/BadgeSnippets";
import AvatarImageSnippets from "../SnippetComponents/AvatarImageSnippets";
import ColorPickerSnippets from "../SnippetComponents/ColorPickerSnippets";
import PageLoaderSnippets from "../SnippetComponents/PageLoaderSnippets";
import PaginationSnippets from "../SnippetComponents/PaginationSnippets";
import PillNavigationSnippets from "../SnippetComponents/PillNavigationSnippets";
import PaymentFormSnippets from "../SnippetComponents/PaymentFormSnippets";
import NewsletterSnippets from "../SnippetComponents/NewsLetterSnippets";
import SortSnippets from "../SnippetComponents/SortSnippets";
import CouponSnippets from "../SnippetComponents/CouponSnippets";
import ShapedSnippets from "../SnippetComponents/ShadeSnippets";
import QuoteSlideshowSnippets from "../SnippetComponents/QuoteSlideSnippets";
import AnimatedIconSnippets from "../SnippetComponents/AnimationIcon";
import CountdownTimeSnippets from "../SnippetComponents/CountDownSnippets";
import TextAreaSnippets from "../SnippetComponents/TextAreaSnippets";
import PricingSnippets from "../SnippetComponents/PricingSnippets";

import TabGroup from "../SnippetComponents/TabGroup";

import ProfileCardSnippets from "../SnippetComponents/ProfileCardSnippets";

import NeonButton from "../SnippetComponents/NeonButton";
import ExpandingSearchBar from "../SnippetComponents/ExpandingSearchBar";

function Window({ activeTab }) {
  const content = [
    // Please add your components alphabetically in both button and this file and in same palce for perfect rendering

    <AnimatedIconSnippets />,
    <AnimationSnippets />,
    <AvatarImageSnippets />,
    <BadgeSnippets />,
    <BoxShadowSnippets />,
    <ButtonSnippets />,
    <CardSnippets />,
    <CheckboxSnippets />,
    <ColorPickerSnippets />,
    <CountdownTimeSnippets />,
    <CouponSnippets />,
    <DarkModeSnippets />,
    <DropdownSnippetCard />,
    < ExpandingSearchBar/>,
    <FooterSnippets />,
    <FormSnippets />,
    <InputFieldSnippets />,
    <LoginSnippets />,
    <NavbarIconSnippets />,
    <NeonButton/>,
    <NewsletterSnippets />,
    <PageLoaderSnippets />,
    <PaginationSnippets />,
    <PaymentFormSnippets />,
    <PillNavigationSnippets />,
    <PricingSnippets />,
    <ProfileCardSnippets/>,
    <ProgressBarSnippets />,
    <QuoteSlideshowSnippets />,
    <RadioSnippets />,
    <ResponsivenessSnippets />,
    <ShapedSnippets />,
    <SignupSnippets />,
    <SlideshowSnippets />,
    <SocialSnippets />,
    <SortSnippets />,
    <TabGroup />,
    <TableSnippets />,
    <TextAreaSnippets />,
    <TextSnippets />,
    <ToggleSwitchSnippets />,
  ];

  return (
    <div className="flex-1 p-8 text-black pt-8 overflow-y-auto min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">
        AnimateHub - A one place for all your Frontend CSS needs
      </h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
        {content[activeTab]}
      </div>
      
    </div>
  );
}

export default Window;
