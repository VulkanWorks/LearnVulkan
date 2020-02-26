#version 450

layout (binding = 1) uniform sampler2D texture_instance;

layout (location = 0) in vec3 inNormal;
layout (location = 1) in vec3 inColor;
layout (location = 2) in vec3 inUV;
layout (location = 3) in vec3 inViewVec;
layout (location = 4) in vec3 inLightVec;

layout (location = 0) out vec4 outFragColor;

void main() 
{
    vec4 color = texture(texture_instance, inUV.xy, 0.5f); //* vec4(inColor, 1.0); //use one texture here	
    vec3 N = normalize(inNormal);
    vec3 L = normalize(inLightVec);
    vec3 V = normalize(inViewVec);
    vec3 R = reflect(-L, N);
    vec3 diffuse = max(dot(N, L), 0.1) * vec3(1.0);
    vec3 specular = (dot(N,L) > 0.0) ? pow(max(dot(R, V), 0.0), 16.0) * vec3(0.75) * color.r : vec3(0.0);
    outFragColor = vec4(diffuse * color.rgb + specular, 1.0);		
    //outFragColor = vec4(specular, 1.0);	
}