import { Injectable } from "@angular/core";
import { UserModel } from "../models/UserModel";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from "rxjs";
import { Router, RouterLinkWithHref, } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { IUserLogin } from "../models/IUserLogin";


@Injectable({ providedIn: 'root' })
export class UserService {

    URL_SUPABASE = 'https://jyxfrscpqvisubsoflyl.supabase.co/rest/v1/'

    constructor(private _httpclient: HttpClient, private router: Router) { }

    supabaseheaders = new HttpHeaders()
        .set('apikey', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5eGZyc2NwcXZpc3Vic29mbHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxMDMyNjMsImV4cCI6MjAxMzY3OTI2M30.QzkoVqITCKW7meTrpZV3N1afr_L8EfmEWzEb-joBIuk')

    getUserListSupaBase(): Observable<UserModel[]> {
        return this._httpclient.get<UserModel[]>(this.URL_SUPABASE, { headers: this.supabaseheaders, responseType: 'json' });
    }

    getUser(user_id: string): Observable<UserModel> {
        return this._httpclient.get<UserModel[]>(this.URL_SUPABASE + 'usuarios?user_id=eq.' + user_id, { headers: this.supabaseheaders, responseType: 'json' }).pipe(
            map( (userInfo) => {
                return userInfo[0];
            })
        );
    }

    getUserById(userId: number): Observable<UserModel> {
       return this._httpclient.get<UserModel>(`${this.URL_SUPABASE}/usuarios/${userId}`, { headers: this.supabaseheaders });
    }

    addNewUser(user: Partial<UserModel>): Observable<Partial<UserModel>> {
        return this._httpclient.post<Partial<UserModel>>(this.URL_SUPABASE + 'usuarios', user, { headers: this.supabaseheaders });
    }

    authUser(): Observable<UserModel> {
        return this._httpclient.get<UserModel>(this.URL_SUPABASE.concat('?correo=eq.ctapia'), { headers: this.supabaseheaders.set('Accept', 'application/vnd.pgrst.object+json'), responseType: 'json' })
    }

    getLoginUser(iUserLogin: IUserLogin): Observable<string | any> {
        return this._httpclient.get<any>(this.URL_SUPABASE + "usuarios?correo=eq." + iUserLogin.correo + "&password=eq." + iUserLogin.password, { headers: this.supabaseheaders }).pipe(
            map((user) => {
                console.log(user[0]);
                return user[0].user_id;
            }), catchError((err) => {
                console.log(err)
                return err;
            })
        );
    }

    async logout(): Promise<void> {
        // Elimina la información del usuario de las Preferencias.
        await Preferences.remove({ key: 'user' });

        // Redirige al usuario a la página de inicio o login.
        this.router.navigate(['/login']);
    }

}
