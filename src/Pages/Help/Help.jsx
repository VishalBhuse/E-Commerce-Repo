import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

export const Help = () => {
  return (
    <>
      <Box
        backgroundImage={
          "https://i01.appmifile.com/webfile/globalimg/in/2020/index/top-banner.png"
        }
        height="200px"
        color="#fff"
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
      >
        <Heading fontSize={"40px"}>Frequently Asked Questions</Heading>
      </Box>
      <Box w="80%" m="60px auto">
        <Tabs variant="unstyled" border="#fff">
          <HStack alignItems={'flex-start'}>
            <TabList h="auto" w="400px" textAlign={"left"}>
              <VStack alignItems={"flex-start"}>
                <Text _selected={{ color: "red" }}>Popular Queries</Text>
                <Tab _selected={{ color: "red" }}>Edit picture</Tab>
                <Tab _selected={{ color: "red" }}>Set/Change Screen Lock</Tab>
                <Tab _selected={{ color: "red" }}>[ROM] Redmi 10 Series</Tab>
                <Tab _selected={{ color: "red" }}>[ROM] Xiaomi 11 Series</Tab>
                <Tab _selected={{ color: "red" }}>Enable/Disable AutoStart</Tab>
                <Tab _selected={{ color: "red" }}>Update Phone</Tab>
                <Tab _selected={{ color: "red" }}>[ROM] Redmi K Series</Tab>
                <Tab _selected={{ color: "red" }}>Block Calls/SMS</Tab>
                <Tab _selected={{ color: "red" }}>[ROM] Redmi 11 Series</Tab>
                <Tab _selected={{ color: "red" }}>Remove Unwanted Apps</Tab>
              </VStack>
            </TabList>
            <TabPanels h="auto" textAlign={"left"} >
              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  Edit pictures
                </Text>
                <Text mb="20px" fontSize={"14px"} mt="5px" color={"#68748F"}>
                  To Edit Picture, please follow the below mentioned Steps:
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  1. Go to "Home Screen".
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  2. Click on "Gallery" App.
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  3. Select "Photo".
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  4. At bottom of screen - Click on "scissor Cut" icon.
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  5. Edit the picture as required & click on save.
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Please click on the below video to know more:
                </Text>
                <AspectRatio ratio={15 / 7} mt="5">
                  <iframe
                    title="naruto"
                    src="https://www.youtube.com/embed/octGotLqLss"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>
              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  Set/Change Screen Lock
                </Text>
                <Text mb="20px" fontSize={"14px"} mt="5px" color={"#68748F"}>
                  In Order To Set/Change Screen lock, please follow the below
                  mentioned steps:
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  1. Go to "Settings".
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  2. Go to "Lock Screen"
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  3. Tap on "Passwords & Security"
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  4. Tap on "Password" & Select any one from
                  "Pin/Pattern/Password"
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Please click on the below video to know more:
                </Text>
                <AspectRatio ratio={15 / 7} mt="5">
                  <iframe
                    src="https://www.youtube.com/embed/octGotLqLss"
                    title="naruto"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>

              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  [ROM] Redmi 10 Series
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Last Updated: 5-SEP-2022
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note 10 Pro Max <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note 10 Pro <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note 10 <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note 10 <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
              </TabPanel>
              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  [ROM] Redmi 11 Series
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Last Updated: 5-SEP-2022
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note 11 Pro Max <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note 11 Pro <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note 11 <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>

                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note 11 <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
              </TabPanel>

              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  Enable/Disable AutoStart
                </Text>
                <Text mb="20px" fontSize={"14px"} mt="5px" color={"#68748F"}>
                  To Enable or Disable Auto Start , please follow the below
                  mentioned steps:
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  1. Go to "Settings" .
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  2. Go to "Apps" .
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  3. Go to "Manage Apps" .
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  4. Select The Desire App.
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  5. Tap "Auto Start" & turn the same on/off basis requirements
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Please click on the below video to know more:
                </Text>
                <AspectRatio ratio={15 / 7} mt="5">
                  <iframe
                    src="https://www.youtube.com/embed/TQkLf-GbbNQ"
                    title="naruto"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>

              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  Update Phone
                </Text>
                <Text mb="20px" fontSize={"14px"} mt="5px" color={"#68748F"}>
                  To Update The Phone, please follow below mentioned steps.
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  1. Go to "Settings".
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  2. Click on "MIUI" Banner.
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  3. Tap on "Check for Update".
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  4. Tap on "Update Device" if any update is available.
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Please click on the below video to know more:
                </Text>
                <AspectRatio ratio={15 / 7} mt="5">
                  <iframe
                    src="https://www.youtube.com/embed/ysPCvW-sgS8"
                    title="naruto"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>

              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  [ROM] Redmi K Series
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Last Updated: 5-SEP-2022
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note K10 Pro Max <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note K10 Pro <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note K10 <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>

                <Text fontSize={"12px"} color="#68748F" mt="20px">
                  Redmi Note K10 <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
              </TabPanel>

              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  Block Calls/SMS
                </Text>
                <Text mb="20px" fontSize={"14px"} mt="5px" color={"#68748F"}>
                  To Blocklist the calls, SMS, Notification, Sim , please follow
                  the below mentioned steps:
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  1. Go to "Home Screen" .
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  2. Click on "Security App"
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  3. Tap on "Block list" & Select "SMS/CALL".
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  4. Tap on "Settings " & Select "Blocked numbers"
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  5. Tap On "Add" select options as needed
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Please click on the below video to know more:
                </Text>
                <AspectRatio ratio={15 / 7} mt="5">
                  <iframe
                    src="https://www.youtube.com/embed/MHixoEIfOj8"
                    title="naruto"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>
              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  [ROM] Redmi 11 Series
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Last Updated: 5-SEP-2022
                </Text>
                <Text fontSize={"14px"} color="#68748F" mt="20px">
                  Redmi Note 11 Pro Max <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
                <Text fontSize={"14px"} color="#68748F" mt="20px">
                  Redmi Note 11 Pro <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
                <Text fontSize={"14px"} color="#68748F" mt="20px">
                  Redmi Note 11 <br /> V13.0.5.0.SKFINXM <br />
                  Fastboot link: <br />
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/sweetin_in_global_images_V13.0.5.0.SKFINXM_20220707.0000.00_12.0_in_294bd923ce.tgz{" "}
                  <br />
                  Recovery link:
                  http://bigota.d.miui.com/V13.0.5.0.SKFINXM/miui_SWEETININGlobal_V13.0.5.0.SKFINXM_59d7d3e509_12.0.zip
                </Text>
              </TabPanel>

              <TabPanel>
                <Text mb="20px" fontWeight={"600"}>
                  Remove Unwanted Apps
                </Text>
                <Text mb="20px" fontSize={"14px"} mt="5px" color={"#68748F"}>
                  To Remove Unwanted Apps, Please follow the below mentioned
                  steps:
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  1. Go to "Settings".
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  2. Go to "Apps"
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  3. Go to "Manage Apps"
                </Text>
                <Text fontSize={"14px"} mt="5px" color="#68748F">
                  4. select the desire app & tap On "Uninstall".
                </Text>
                <Text fontSize={"14px"} mt="15px" color="#68748F">
                  Please click on the below video to know more:
                </Text>
                <AspectRatio ratio={15 / 7} mt="5">
                  <iframe
                    src="https://www.youtube.com/embed/Q59Z80q5EtE"
                    title="naruto"
                    allowFullScreen
                  />
                </AspectRatio>
              </TabPanel>
            </TabPanels>
          </HStack>
        </Tabs>
      </Box>
    </>
  );
};
