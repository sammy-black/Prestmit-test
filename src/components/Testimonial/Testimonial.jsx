import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import TestimonialCard from "./TestimonialCard";
import { albus, harry, severus } from "../../assets/testimonial";
import TestimonialSlider from "../../components/Sliders/TestimonialSlider";
import useResponsive from "../../hooks/useResponsive";
import { styles } from "../../globalStyles";
import { useRef } from "react";

const Testimonial = () => {
  const isDesktop = useResponsive("up", "md");
  const leftRef = useRef(null)
  const rightRef = useRef(null)




  const testimonialData = [
    {
      id: 1,
      content:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      name: "Albus Dumbledore",
      img: albus,
      title: "Manager @ Howarts",
    },

    {
      id: 2,
      content:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      name: "Severus Snape",
      img: severus,
      title: "Manager @ Slytherin",
    },

    {
      id: 3,
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      name: "Harry Potter",
      img: harry,
      title: "Team Leader @ Gryffindor",
    },
    {
      id: 4,
      content:
        "“Buyer buzz partner network disruptive non-disclosure agreement business”",
      name: "Albus Dumbledore",
      img: albus,
      title: "Manager @ Howarts",
    },

    {
      id: 5,
      content:
        "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
      name: "Severus Snape",
      img: severus,
      title: "Manager @ Slytherin",
    },

    {
      id: 6,
      content:
        "“Release facebook responsive web design business model canvas seed money monetization.”",
      name: "Harry Potter",
      img: harry,
      title: "Team Leader @ Gryffindor",
    },
  ];
  return (
    <>
    <Box sx={{ bgcolor: "var(--primaryColor)",}}>
      <Container
        sx={{
          maxWidth: { lg: 1440 },
          color: "white",
          padding: { xs: "80px 20px", lg: "96px  156px 96px  150px" },
        }}
      >
        <Stack direction={"row"} justifyContent="space-between">
          <Typography
            sx={{
              ...styles.header,
              textAlign: { xs: "center", lg: "left" },
              width: { xs: "100%", md: "65%" },
            }}
          >
            An enterprise template to ramp up your company website
          </Typography>

          <Stack
            sx={{ display: { xs: "none", md: "block" } }}
            direction="row"
            spacing={3.5}
            alignSelf={"flex-end"}
          >
            <IconButton sx={navigationBtnStyling} onClick={()=> leftRef.current.click()}>
              <ArrowLeft color="#0A2640" size={32}  />
            </IconButton>

            <IconButton sx={navigationBtnStyling} onClick={()=> rightRef.current.click()}>
              <ArrowRight color="#0A2640" size={32} />
            </IconButton>
          </Stack>
        </Stack>

          <Box marginTop="72px">
            <TestimonialSlider leftRef={leftRef} rightRef={rightRef} isDesktop={isDesktop}>
              {testimonialData.map((el) => (
                <TestimonialCard
                  key={el.id}
                  name={el.name}
                  img={el.img}
                  content={el.content}
                  title={el.title}
                />
              ))}
            </TestimonialSlider>
          </Box>

      </Container>
      </Box>
    </>

  );
};

export default Testimonial;

const navigationBtnStyling = {
  backgroundColor: "white",
  ":hover": { backgroundColor: "white", opacity: 0.8 },
  width: 72,
  height: 72,
};
