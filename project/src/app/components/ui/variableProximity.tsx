import { forwardRef, useMemo, useRef, useEffect, CSSProperties, HTMLAttributes, RefObject } from 'react';
import { motion } from 'motion/react';

function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    console.log('🎬 useAnimationFrame: Setting up animation loop');
    let frameId: number;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => {
      console.log('🛑 useAnimationFrame: Cleaning up animation loop');
      cancelAnimationFrame(frameId);
    };
  }, [callback]);
}

function useMousePositionRef(containerRef: RefObject<HTMLElement | null>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    console.log('🖱️ useMousePositionRef: Setting up mouse tracking');
    
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
        console.log('📍 Mouse position (relative):', positionRef.current);
      } else {
        positionRef.current = { x, y };
        console.log('📍 Mouse position (absolute):', positionRef.current);
        console.warn('⚠️ Container ref is null, using absolute position');
      }
    };

    const handleMouseMove = (ev: MouseEvent) => {
      console.log('🖱️ Mouse move event:', ev.clientX, ev.clientY);
      updatePosition(ev.clientX, ev.clientY);
    };
    
    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0];
      console.log('👆 Touch move event:', touch.clientX, touch.clientY);
      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      console.log('🧹 useMousePositionRef: Cleaning up mouse listeners');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

interface VariableProximityProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef: RefObject<HTMLElement | null>;
  radius?: number;
  falloff?: 'linear' | 'exponential' | 'gaussian';
  className?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = 'linear',
    className = '',
    onClick,
    style,
    ...restProps
  } = props;

  console.log('🚀 VariableProximity render:', {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    radius,
    falloff,
    containerRefCurrent: containerRef?.current
  });

  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const interpolatedSettingsRef = useRef<string[]>([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  const parsedSettings = useMemo(() => {
    console.log('🔍 Parsing font variation settings...');
    
    const parseSettings = (settingsStr: string) => {
      console.log('📝 Parsing settings string:', settingsStr);
      const parsed = new Map(
        settingsStr
          .split(',')
          .map(s => s.trim())
          .map(s => {
            const [name, value] = s.split(' ');
            const cleanName = name.replace(/['"]/g, '');
            const parsedValue = parseFloat(value);
            console.log(`   - ${cleanName}: ${parsedValue}`);
            return [cleanName, parsedValue];
          })
      );
      console.log('📊 Parsed settings map:', parsed);
      return parsed;
    };

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    const result = Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue
    }));
    
    console.log('✅ Final parsed settings:', result);
    return result;
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    // Only log occasionally to avoid spam
    if (Math.random() < 0.01) {
      console.log(`📏 Distance calculation: (${x1}, ${y1}) -> (${x2}, ${y2}) = ${distance}`);
    }
    return distance;
  };

  const calculateFalloff = (distance: number) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    let result;
    switch (falloff) {
      case 'exponential':
        result = norm ** 2;
        break;
      case 'gaussian':
        result = Math.exp(-((distance / (radius / 2)) ** 2) / 2);
        break;
      case 'linear':
      default:
        result = norm;
    }
    
    // Only log occasionally to avoid spam
    if (Math.random() < 0.01) {
      console.log(`📉 Falloff calculation: distance=${distance}, norm=${norm}, falloff=${result}`);
    }
    return result;
  };

  useAnimationFrame(() => {
    if (!containerRef?.current) {
      console.warn('⚠️ Animation frame: Container ref is null, skipping');
      return;
    }
    
    const { x, y } = mousePositionRef.current;
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) {
      return; // No movement, skip processing
    }
    
    // Log occasionally to avoid spam
    if (Math.random() < 0.02) {
      console.log('🎯 Animation frame update:', { x, y, letterCount: letterRefs.current.length });
    }
    
    lastPositionRef.current = { x, y };
    const containerRect = containerRef.current.getBoundingClientRect();

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) {
        if (Math.random() < 0.001) {
          console.warn(`⚠️ Letter ref at index ${index} is null`);
        }
        return;
      }

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

      const distance = calculateDistance(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
        letterCenterX,
        letterCenterY
      );

      if (distance >= radius) {
        letterRef.style.fontVariationSettings = fromFontVariationSettings;
        return;
      }

      const falloffValue = calculateFalloff(distance);
      const newSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const interpolatedValue = fromValue + (toValue - fromValue) * falloffValue;
          return `'${axis}' ${interpolatedValue}`;
        })
        .join(', ');

      // Log font variation changes occasionally
      if (Math.random() < 0.005) {
        console.log(`🎨 Letter ${index} font variation:`, {
          distance,
          falloffValue,
          oldSettings: letterRef.style.fontVariationSettings,
          newSettings
        });
      }

      interpolatedSettingsRef.current[index] = newSettings;
      letterRef.style.fontVariationSettings = newSettings;
    });
  });

  const words = label.split(' ');
  let letterIndex = 0;

  console.log('🔤 Rendering words:', words);

  useEffect(() => {
    console.log('📌 Component mounted/updated');
    console.log('📊 Letter refs length:', letterRefs.current.length);
    console.log('📦 Container ref current:', containerRef?.current);
    
    // Check if any letter refs are actually set
    const validRefs = letterRefs.current.filter(ref => ref !== null);
    console.log('✅ Valid letter refs count:', validRefs.length);
    
    // Check font family of first letter
    if (validRefs.length > 0) {
      const firstLetter = validRefs[0];
      const computedStyle = window.getComputedStyle(firstLetter);
      console.log('🔤 First letter font info:', {
        fontFamily: computedStyle.fontFamily,
        fontWeight: computedStyle.fontWeight,
        fontVariationSettings: computedStyle.fontVariationSettings || 'none'
      });
    }
  }, []);

  return (
    <span
      ref={ref}
      onClick={onClick}
      style={{
        display: 'inline',
        ...style
      }}
      className={className}
      {...restProps}
    >
      {words.map((word, wordIndex) => {
        console.log(`🔤 Rendering word ${wordIndex}: "${word}"`);
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split('').map(letter => {
              const currentLetterIndex = letterIndex++;
              console.log(`📝 Rendering letter ${currentLetterIndex}: "${letter}"`);
              return (
                <motion.span
                  key={currentLetterIndex}
                  ref={el => {
                    letterRefs.current[currentLetterIndex] = el;
                    if (el) {
                      console.log(`📎 Letter ref set for index ${currentLetterIndex}:`, el);
                    }
                  }}
                  style={{
                    display: 'inline-block',
                    fontVariationSettings: interpolatedSettingsRef.current[currentLetterIndex]
                  }}
                  aria-hidden="true"
                >
                  {letter}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = 'VariableProximity';
export default VariableProximity;