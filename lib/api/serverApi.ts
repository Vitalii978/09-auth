
import { cookies } from "next/headers";
import { nextServer } from "./api";
import type { Note } from '@/types/note';
import type { User } from "@/types/user";
import type { NoteResponse } from "./clientApi";


export const checkServerSession = async () => {
  const cookieStore = await cookies(); 
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const cookieHeader = [
    accessToken ? `accessToken=${accessToken}` : null,
    refreshToken ? `refreshToken=${refreshToken}` : null
  ].filter(Boolean).join('; ');

  const res = await nextServer.get('/auth/session', {
    headers: {
      Cookie: cookieHeader,
    },
  });

  return res;
};


export const getServerMe = async (): Promise<User> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const cookieHeader = [
    accessToken ? `accessToken=${accessToken}` : null,
    refreshToken ? `refreshToken=${refreshToken}` : null
  ].filter(Boolean).join('; ');

  const res = await nextServer.get<User>('/users/me', {
    headers: {
      Cookie: cookieHeader,
    },
  });

  return res.data;
};


export const fetchServerNotes = async (page: number, query: string, tag?: string): Promise<NoteResponse> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const cookieHeader = [
    accessToken ? `accessToken=${accessToken}` : null,
    refreshToken ? `refreshToken=${refreshToken}` : null
  ].filter(Boolean).join('; ');

  const params = {
    params: {
      search: query,
      tag: tag,
      page: page,
      perPage: 12,
    },
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieHeader,
    },
  };

  const response = await nextServer.get<NoteResponse>('/notes', params);
  return response.data;
};


export const fetchServerNoteById = async (id: string): Promise<Note> => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('accessToken')?.value;
  const refreshToken = cookieStore.get('refreshToken')?.value;

  const cookieHeader = [
    accessToken ? `accessToken=${accessToken}` : null,
    refreshToken ? `refreshToken=${refreshToken}` : null
  ].filter(Boolean).join('; ');

  const res = await nextServer.get<Note>(`/notes/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieHeader,
    },
  });

  return res.data;
};
