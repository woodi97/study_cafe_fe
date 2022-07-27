import React from 'react'
import { MenuInfoCard, MenuPriceCard, NewMenuCard } from '@src/components/molecule/Cards'
import { Slider } from '@src/components/atom'
import { Section } from '@src/components/molecule'

const HomePageTemplate = () => {
  return (
    <div className="space-y-4 py-2">
      <Section className="px-side-padding">
        <MenuInfoCard
          title="Best seller of the week"
          description="Iced Coffee Sweet Heaven"
          linkTo="https://google.com"
          image="/coffee.png"
        />
      </Section>
      <Section className="pl-side-padding" title={"This week's recommendations"}>
        <Slider divider="main-price" className="space-x-6">
          <MenuPriceCard menu="Iced Americano" price="2000W" />
          <MenuPriceCard menu="Iced Americano" price="2000W" />
          <MenuPriceCard menu="Iced Americano" price="2000W" />
        </Slider>
      </Section>
      <Section className="px-side-padding" title={"What's in the shop"}>
        <NewMenuCard
          title="Introducing our new lemonade menu"
          description="Try our refreshing lemonade, strawberry lemonade, and orange lemonade"
          linkTo="/"
          image="/lemonade.png"
        />
      </Section>
    </div>
  )
}

export default HomePageTemplate