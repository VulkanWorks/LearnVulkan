message("=============BUILD CONFIG=============")
message("BUILD_Base\t\tON")
message("BUILD_BaseEngine\t\tON")
if(BUILD_QtExamples MATCHES ON)
    message("BUILD_QtExamples\t\tON")
    message("BUILD_QtVulkanWidget\tON")
else()
    message("BUILD_QtExamples\t\tOFF")
    message("BUILD_QtVulkanWidget\tOFF")
endif()
message("======================================")
if(BUILD_QtExamples MATCHES OFF)
    message("To build qt vulkan, you need to cmake .. -DBUILD_QtExamples=ON")
endif()
message("Or use cmake-gui .. to operate.")