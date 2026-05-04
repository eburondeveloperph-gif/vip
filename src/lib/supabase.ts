import { createClient } from '@supabase/supabase-js';

const supabaseUrl = (import.meta as any).env.VITE_SUPABASE_URL || '';
const supabaseKey = (import.meta as any).env.VITE_SUPABASE_PUBLISHABLE_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

export async function uploadFileToSupabase(
  file: File,
  bucket: string = 'uploads',
  path?: string
): Promise<{ path: string; publicUrl: string | null; error: Error | null }> {
  const fileExt = file.name.split('.').pop();
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}.${fileExt}`;
  const filePath = path ? `${path}/${fileName}` : fileName;

  try {
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      return { path: '', publicUrl: null, error: new Error(uploadError.message) };
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return { path: filePath, publicUrl, error: null };
  } catch (err: any) {
    return { path: '', publicUrl: null, error: err };
  }
}

export async function uploadBase64ImageToSupabase(
  base64Data: string,
  bucket: string = 'uploads',
  path?: string
): Promise<{ path: string; publicUrl: string | null; error: Error | null }> {
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}.jpg`;
  const filePath = path ? `${path}/${fileName}` : fileName;

  try {
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'image/jpeg' });
    const file = new File([blob], fileName, { type: 'image/jpeg' });

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      return { path: '', publicUrl: null, error: new Error(uploadError.message) };
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return { path: filePath, publicUrl, error: null };
  } catch (err: any) {
    return { path: '', publicUrl: null, error: err };
  }
}

export async function uploadVideoFrameToSupabase(
  base64Data: string,
  bucket: string = 'frames',
  path?: string
): Promise<{ path: string; publicUrl: string | null; error: Error | null }> {
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 15)}.jpg`;
  const filePath = path ? `${path}/${fileName}` : fileName;

  try {
    const binaryString = atob(base64Data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: 'image/jpeg' });
    const file = new File([blob], fileName, { type: 'image/jpeg' });

    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      return { path: '', publicUrl: null, error: new Error(uploadError.message) };
    }

    const { data: { publicUrl } } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return { path: filePath, publicUrl, error: null };
  } catch (err: any) {
    return { path: '', publicUrl: null, error: err };
  }
}

export async function extractVideoFrames(
  videoFile: File,
  secondsInterval: number = 1
): Promise<{ frames: string[]; duration: number }> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(videoFile);
    const video = document.createElement('video');
    video.src = url;
    video.muted = true;
    video.playsInline = true;

    const frames: string[] = [];
    const maxFrames = 30;

    const handleSeek = () => {
      const canvas = document.createElement('canvas');
      let { videoWidth: w, videoHeight: h } = video;
      if (w === 0 || h === 0) {
        URL.revokeObjectURL(url);
        resolve({ frames, duration: video.duration });
        return;
      }
      const max = 512;
      if (w > max || h > max) {
        const r = Math.min(max / w, max / h);
        w = Math.round(w * r);
        h = Math.round(h * r);
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(video, 0, 0, w, h);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
      frames.push(dataUrl.split(',')[1]);
      captureNextFrame();
    };

    let currentTime = 0;
    const captureNextFrame = () => {
      if (frames.length >= maxFrames || currentTime >= video.duration) {
        URL.revokeObjectURL(url);
        resolve({ frames, duration: video.duration });
        return;
      }
      currentTime = Math.min(currentTime + secondsInterval, video.duration);
      video.currentTime = currentTime;
    };

    video.onloadedmetadata = () => {
      if (video.duration <= 0) {
        URL.revokeObjectURL(url);
        resolve({ frames, duration: 0 });
        return;
      }
      video.currentTime = 0;
    };

    video.onseeked = handleSeek;

    video.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({ frames: [], duration: 0 });
    };
  });
}

export function getFilePublicUrl(
  path: string,
  bucket: string = 'uploads'
): string | null {
  const { data: { publicUrl } } = supabase.storage
    .from(bucket)
    .getPublicUrl(path);
  return publicUrl;
}
