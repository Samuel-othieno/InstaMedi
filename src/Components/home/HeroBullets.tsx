import { Container, Title, Text, Button } from "@mantine/core";
import classes from "./HeroBullets.module.css";
import { Link } from "react-router-dom";
import React from "react";
import Booking from "../Booking";


export function HeroBullets() {
  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${"https://i.pinimg.com/564x/69/ae/9d/69ae9ddef4631a407efe8de462a19d66.jpg"})`,
      }}
    >
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              A{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "blue", to: "blue" }}
              >
                Quality Medicare
              </Text>{" "}
              to life for the whole family
            </Title>

            <Text className={classes.description} mt={30}>
              Say goodbye to waiting at hospitals to have consultation with your
              doctor. <br /> Book the appointment in InstaMedi and get <br />{" "}
              your doctor at your home to have consultation at your convenient
              time.
            </Text>

            <div className="flex justify-start mt-4 space-x-4">
              <div className="flex justify-start mt-4 space-x-4">
                
                  <button
                    className="bg-blue-500  text-white px-4 py-2 rounded-xl  "
                    style={{ margin: "auto" }}
                  >
                    <Booking/>
                  </button>
                
              </div>

              <div className="flex justify-start mt-4 space-x-4">
                <Link to="/providers">
                  <button
                    className="bg-blue-500  text-white px-4 py-2 rounded-xl  "
                    style={{ margin: "auto" }}
                  >
                    Contact Dr.
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
