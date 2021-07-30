const fragmentShaderSrc = 
`
precision mediump float;

uniform float u_Fading;
uniform float u_AmbientStrength;

varying vec3 v_Color;
varying vec3 v_Normal;

void main() {
    // gl_FragColor = vec4(v_Color, 1);
    
    // set distant points to less visible
    vec4 color = vec4(v_Color, 1.0 - u_Fading * gl_FragCoord[2]);

    // set lighting
    vec3 lightDir = normalize(vec3(1, 1, -1));
    float diff = max(dot(v_Normal, lightDir), 0.0);
    vec3 lightColor = vec3(1, 1, 1);

    vec4 ambient = vec4(u_AmbientStrength * lightColor, 0.5);
    vec4 diffuse = vec4(diff * lightColor, 0.5);
    gl_FragColor = (ambient + diffuse) *  color;
}
`