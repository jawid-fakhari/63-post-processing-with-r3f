import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'

import { Bloom, DepthOfField, EffectComposer, Glitch, Noise, ToneMapping, Vignette } from '@react-three/postprocessing'
import { GlitchMode, BlendFunction, ToneMappingMode } from 'postprocessing'
import Drunk from './Drunk'
import { useRef } from 'react'

export default function Experience() {
    const drunkRef = useRef()

    return <>
        <color args={['#ffffff']} attach="background" />

        {/* <color args={['#000000']} attach="background" /> */}

        {/* importare EffectComposer, ToneMapping, Vignette, Glitch, Noise, Bloom */}

        <EffectComposer
        //multisampling={8}//prevent the aliasing effect
        >
            <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />

            {/* <Vignette
                // Viegnette effetto hallow intorno immagine
                offset={0.3}
                darkness={0.9}
                blendFunction={BlendFunction.NORMAL}
            /> */}

            {/* <Glitch
                delay={[0.5, 1]}
                duration={[0.1, 0.3]}
                strength={[0.2, 0.4]}
                mode={GlitchMode.CONSTANT_MILD} //importare GlitchMode from postprocessing
            /> */}

            {/* <Noise
                premultiply
                blendFunction={BlendFunction.SOFT_LIGHT}
            /> */}

            {/* <Bloom
                //Oggetti devono avere i valori Unit RGB 0-1, ma non rimaniamo tra 0-1 perchè vogliamo l'effetto Bloom quindi aumentiamo il valore anche più di 1, controlla sphereGeometry
                luminanceThreshold={1.1}
                mipmapBlur
            /> */}

            {/* <DepthOfField
                focusDistance={0.025}
                focalLength={0.025}
                bokehScale={6}
            /> */}

            <Drunk
                ref={drunkRef}
                frequency={2}
                amplitude={0.1}

            />

        </EffectComposer>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        {/* Bloom */}
        {/* <mesh castShadow position-x={- 2}>
            <sphereGeometry />
            <meshBasicMaterial
                //è meglio usare meshBasicMaterial in caso di Bloom e UnitRG cosi l'effetto bloom è da tutti lati
                color={[4, 2, 2]} //Unit RGB, aumentato per avere effetto bloom
            />
        </mesh> */}

        {/* Bloom */}
        {/* <mesh castShadow position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial
                color="orange"
                emissive="orange" //Blooming senza usare Unit RGB
                emissiveIntensity={2} //Blooming senza usare Unit RGB
            />
        </mesh> */}

        <mesh castShadow position-x={- 2}>
            <sphereGeometry />
            <meshStandardMaterial
                color="orange"
            />
        </mesh>

        <mesh castShadow position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial
                color="mediumpurple"
            />
        </mesh>


        <mesh receiveShadow position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>


    </>
}