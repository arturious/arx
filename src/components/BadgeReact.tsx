import * as THREE from 'three'
import { useEffect, useRef, useState, useMemo } from 'react'
import { Canvas, useFrame, extend } from '@react-three/fiber'
import { useGLTF, Environment, Lightformer } from '@react-three/drei'
import {
  Physics,
  BallCollider,
  CuboidCollider,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  RapierRigidBody,
} from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

extend({ MeshLineGeometry, MeshLineMaterial })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any
      meshLineMaterial: any
    }
  }
}

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: any
    meshLineMaterial: any
  }
}

const segmentProps = {
  type: 'dynamic',
  canSleep: true,
  colliders: false,
  angularDamping: 2,
  linearDamping: 2,
} as const

export function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<THREE.Mesh<MeshLineGeometry, MeshLineMaterial>>(null)
  const fixed = useRef<RapierRigidBody>(null)
  const j1 = useRef<RapierRigidBody>(null)
  const j2 = useRef<RapierRigidBody>(null)
  const j3 = useRef<RapierRigidBody>(null)

  const card = useRef<RapierRigidBody>(null)
  const vec = new THREE.Vector3()
  const ang = new THREE.Vector3()
  const rot = new THREE.Vector3()
  const dir = new THREE.Vector3()
  const [dragged, drag] = useState<THREE.Vector3 | false>(false)
  const [hovered, hover] = useState(false)

  const { nodes, materials } = useGLTF('./assets/3d/card.glb') as any

  const logoTexture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 720
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.clearRect(0, 0, 512, 720)
      const scale = 240 / 1520
      const centerX = 520 + 1520 / 2
      const centerY = 490 + 520 / 2

      ctx.translate(256, 360)
      ctx.scale(scale, scale)
      ctx.translate(-centerX, -centerY)

      const path = new Path2D(
        'M 1727.500 535.817 C 1718.053 540.267, 1577.170 656.015, 1527.312 700.289 L 1525.124 702.232 1523.496 698.366 C 1521.020 692.488, 1516.284 675.601, 1513.987 664.459 C 1510.591 647.986, 1508.985 634.484, 1508.092 614.920 C 1507.164 594.581, 1506.069 590.269, 1500.397 584.610 C 1492.222 576.454, 1478.254 577.252, 1470.284 586.330 C 1465.353 591.946, 1464.657 596.121, 1465.419 615.500 C 1466.124 633.435, 1467.713 647.892, 1471.105 667.229 L 1473.162 678.959, 1466.872 686.729 C 1422.740 741.244, 1375.652 779.692, 1319.097 807.388 C 1287.109 823.053, 1257.327 831.318, 1232.500 831.420 C 1217.967 831.480, 1211.776 830.309, 1202.228 825.693 C 1179.524 814.717, 1173.938 785.813, 1185.579 739.543 C 1186.957 734.067, 1190.315 722.783, 1193.042 714.468 C 1196.147 705, 1198 697.587, 1198 694.635 C 1198 688.700, 1195.267 683.240, 1190.070 678.792 C 1186.406 675.656, 1184.576 675.059, 1168.285 671.684 C 1158.503 669.658, 1148.846 667.539, 1146.824 666.974 L 1143.148 665.947, 1147.544 657.683 C 1164.715 625.406, 1166.981 599.698, 1153.905 585.513 C 1149.758 581.014, 1141.844 576.664, 1134.885 575.060 C 1123.344 572.399, 1107.923 574.950, 1093.306 581.937 C 1077.814 589.343, 1066.288 600.097, 1059.827 613.174 C 1055.089 622.763, 1053.771 627.894, 1053.707 637 C 1053.617 649.645, 1058.558 660.656, 1069.929 673.152 L 1075.982 679.804, 1068.241 686.722 C 1015.064 734.247, 940.932 771.805, 875.500 784.373 C 860.190 787.314, 848.049 788.274, 833.171 787.722 C 811.376 786.913, 800.184 783.180, 791.399 773.789 C 782.290 764.050, 779.477 753.688, 780.326 733 C 781.208 711.501, 785.769 693.554, 800.060 655.352 C 804.411 643.721, 808.511 631.059, 809.170 627.215 C 812.909 605.412, 797.737 592.801, 778.621 601.820 C 771.706 605.083, 763.853 611.799, 751.889 624.680 C 747.384 629.531, 742.896 634.358, 741.915 635.406 C 740.173 637.268, 739.998 637.197, 734.316 632.306 C 716.270 616.773, 700.794 610, 683.346 610 C 657.555 610, 633.049 626.035, 610.290 657.804 C 584.990 693.119, 572.262 743.669, 581.601 771.741 C 584.126 779.332, 589.591 788.398, 594.095 792.467 C 609.183 806.098, 630.830 803.240, 659.089 783.884 C 674.307 773.461, 706.366 742.314, 732.023 713.023 L 740.324 703.547, 739.674 708.023 C 734.969 740.399, 737.217 763.372, 747.058 783.492 C 759.669 809.277, 781.290 824.410, 812.635 829.394 C 826.901 831.662, 851.015 831.503, 867.818 829.031 C 893.030 825.322, 927.457 815.532, 957.659 803.483 C 972.884 797.409, 1007.943 780.243, 1024 771.001 C 1052.206 754.766, 1082.941 732.345, 1101.500 714.465 C 1105.900 710.226, 1111.268 705.780, 1113.428 704.586 L 1117.356 702.415, 1130.331 706.207 C 1137.467 708.293, 1144.024 710.007, 1144.903 710.015 C 1149.217 710.057, 1149.265 711.154, 1145.611 726.100 C 1139.436 751.358, 1138.610 757.612, 1138.552 779.500 C 1138.482 806.465, 1141.174 819.198, 1150.175 834.464 C 1155.703 843.841, 1169.515 857.580, 1178.333 862.473 C 1186.865 867.208, 1199.939 871.455, 1210.892 873.050 C 1227.156 875.418, 1255.370 873.327, 1276.500 868.188 C 1326.075 856.131, 1382.580 825.401, 1432.939 783.107 C 1445.455 772.596, 1470.672 748.060, 1481.756 735.610 C 1488.634 727.884, 1488.806 727.768, 1490.019 730.036 C 1491.195 732.233, 1490.464 733.101, 1475.880 746.840 C 1400.655 817.699, 1353.697 873.273, 1338.122 909.874 C 1331.639 925.108, 1329.990 939.668, 1333.778 948.230 C 1335.773 952.741, 1341.566 958.504, 1345.676 960.067 C 1349.395 961.481, 1356.619 961.186, 1360.782 959.449 C 1364.707 957.812, 1370.423 952.857, 1372.257 949.500 C 1374.104 946.120, 1374.802 940.066, 1373.839 935.779 C 1369.338 915.747, 1402.944 871.053, 1471 806.563 C 1483.925 794.315, 1498.498 780.684, 1503.384 776.272 L 1512.267 768.250, 1516.762 773.875 C 1540.654 803.774, 1576.650 827.250, 1615 837.944 C 1638.461 844.486, 1657.944 847.118, 1683 847.131 C 1732.460 847.155, 1786.645 833.286, 1838.303 807.381 C 1884.955 783.986, 1932.901 752.628, 1971.827 720.054 C 1978.247 714.681, 1984.491 709.203, 1985.702 707.879 C 1991.124 701.954, 1992.423 692.735, 1988.923 685.018 C 1986.393 679.440, 1984.460 677.273, 1980 675.016 C 1969.085 669.491, 1963.886 671.301, 1943.416 687.748 C 1892.090 728.989, 1831.909 766.403, 1790.500 782.812 C 1754.757 796.977, 1720.497 803.987, 1686.974 803.995 C 1659.537 804.002, 1640.499 801.187, 1618.696 793.898 C 1618.696 793.898, 1579.258 775.960, 1560.663 758.076 C 1552.283 750.015, 1544.455 740.114, 1545.630 739.060 C 1570.749 716.533, 1653.014 648.410, 1715.585 598.321 C 1734.882 582.873, 1751.619 569.029, 1752.778 567.555 C 1759.882 558.524, 1757.045 544.029, 1746.854 537.285 C 1741.523 533.757, 1733.212 533.127, 1727.500 535.817'
      )
      ctx.fillStyle = '#b8b8b8'
      ctx.fill(path)
    }
    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    return texture
  }, [])

  useEffect(() => {
    return () => {
      logoTexture.dispose()
    }
  }, [logoTexture])

  const [curve] = useState(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ])
  )

  useRopeJoint(fixed as any, j1 as any, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1 as any, j2 as any, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2 as any, j3 as any, [[0, 0, 0], [0, 0, 0], 1])

  useSphericalJoint(j3 as any, card as any, [
    [0, 0, 0],
    [0, 1.45, 0],
  ])

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
    return () => void (document.body.style.cursor = 'auto')
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (
      !fixed.current ||
      !j1.current ||
      !j2.current ||
      !j3.current ||
      !band.current ||
      !card.current
    )
      return

    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach(ref => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      })
    }

    if (fixed.current) {
      const [j1Lerped, j2Lerped] = [j1, j2].map(ref => {
        if (ref.current) {
          const lerped = new THREE.Vector3().copy(ref.current.translation())

          const clampedDistance = Math.max(
            0.1,
            Math.min(1, lerped.distanceTo(ref.current.translation()))
          )

          return lerped.lerp(
            ref.current.translation(),
            delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed))
          )
        }
      })

      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2Lerped ?? j2.current.translation())
      curve.points[2].copy(j1Lerped ?? j1.current.translation())
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))

      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, false)
    }
  })

  curve.curveType = 'chordal'

  return (
    <>
      <group position={[0, 4.6, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>

        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.25, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => {
              ;(e.target as Element)?.releasePointerCapture(e.pointerId)
              drag(false)
            }}
            onPointerDown={e => {
              ;(e.target as Element)?.setPointerCapture(e.pointerId)
              if (card.current) {
                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
              }
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                color="#15171c"
                roughness={0.15}
                metalness={0.1}
                clearcoat={1.0}
                clearcoatRoughness={0.1}
                transmission={0.65}
                thickness={1.2}
              />
            </mesh>
            {/* Front Logo overlay */}
            <mesh position={[0, 0.5, 0.006]}>
              <planeGeometry args={[0.7111, 1.0]} />
              <meshBasicMaterial map={logoTexture} transparent opacity={0.72} depthWrite={false} />
            </mesh>
            {/* Back Logo overlay */}
            <mesh position={[0, 0.5, -0.006]} rotation={[0, Math.PI, 0]}>
              <planeGeometry args={[0.7111, 1.0]} />
              <meshBasicMaterial map={logoTexture} transparent opacity={0.72} depthWrite={false} />
            </mesh>
            <mesh
              geometry={nodes.clip.geometry}
              material={materials.metal}
              material-roughness={0.3}
            />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#22252a"
          depthTest={false}
          resolution={new THREE.Vector2(2, 1)}
          lineWidth={0.8}
        />
      </mesh>
    </>
  )
}

useGLTF.preload('./assets/3d/card.glb')

export default function BadgeReact() {
  return (
    <Canvas
      camera={{ position: [0, 0, 13], fov: 29 }}
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
      eventSource={document.getElementById('app') || undefined}
    >
      <ambientLight intensity={Math.PI} />
      <Physics debug={false} interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
        <Band />
      </Physics>
      <Environment blur={0.75}>
        <Lightformer
          intensity={2}
          color="white"
          position={[0, -1, 5]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[-1, -1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={3}
          color="white"
          position={[1, 1, 1]}
          rotation={[0, 0, Math.PI / 3]}
          scale={[100, 0.1, 1]}
        />
        <Lightformer
          intensity={10}
          color="white"
          position={[-10, 0, 14]}
          rotation={[0, Math.PI / 2, Math.PI / 3]}
          scale={[100, 10, 1]}
        />
      </Environment>
    </Canvas>
  )
}
