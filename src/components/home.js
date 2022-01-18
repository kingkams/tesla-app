import React from 'react'
import styled from "styled-components"
import Section from "./Section.js"

export default function Home() {
    return (
        <Container>
            <Section
                title="Model 3"
                description="Order Online  for Touchless Delivery"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                bgimage="model-3.jpg"
            />
            <Section
                title="Model Y"
                description="Order Online  for Touchles Delivery"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                bgimage="model-y.jpg"
            />

            <Section
                title="Model S"
                description="Order Online  for Touchles Delivery"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                bgimage="model-s.jpg"
            />

            <Section
                title="Model X"
                description="Order Online  for Touchles Delivery"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                bgimage="model-x.jpg"
            />
            <Section
                title="Solar Panels"
                description="Lowest  Cost  Solar Panels in America"
                leftBtnText="order now"
                rightBtnText="Learn More"
                bgimage="solar-panel.jpg"
            />
            <Section
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                leftBtnText="order now"
                rightBtnText="Learn More"
                bgimage="solar-roof.jpg"
            />
             <Section
                title="Accessories"
                description="Produce Clean Energy From Your Roof"
                leftBtnText="Shop now"

                bgimage="accessories.jpg"
            />
        </Container>
    )
}
const Container = styled.div`
height : 100vh;

`
