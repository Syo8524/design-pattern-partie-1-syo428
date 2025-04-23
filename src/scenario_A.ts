class ParametresJeu {
    private static instance: ParametresJeu | null = null;
  
    public difficulte: string = "Moyen";
    public langue: string = "Français";
    public volumeMusique: number = 0.5;
    public volumeEffetsSonores: number = 0.8;
    public resolutionEcran: string = "1920x1080";
    public qualiteGraphique: string = "Élevé";
  
    private constructor(_difficulte : string, _langue : string, _volumeMusique : number ) {
    }

    public get Dificulte():string {
    return this.difficulte;
    }

    public get Langue():string {
        return this.Langue;
    }

    public get VolumeMusique(): number{
        return this.volumeMusique;
    }

    public get VolumeEffetsSonores(): number{
        return this.volumeEffetsSonores;
    }

    public get ResolutionEcran(): string{
        return this.resolutionEcran;
    }

    public get QualiteGraphique(): string{
        return this.qualiteGraphique;
    }

        /*public set Dificulte(_difficulte : string ) {
            this.difficulte = _difficulte;
        }
    
        public set Langue(langue : string) {
             this.Langue = _langue;
        }
    
        public set VolumeMusique(volumeMusique : number){
             this.volumeMusique;
        }
    
        public set VolumeEffetsSonores(volumeEffetsSonores){
            this.VolumeEffetsSonores;
        }
    
        public set ResolutionEcran(resolutionEcran : string){
             this.resolutionEcran;
        }
    
        public set QualiteGraphique(qualiteGraphique : string){
             this.qualiteGraphique;
        }
*/

    public static getInstance(): ParametresJeu {
      if (!ParametresJeu.instance) {
        ParametresJeu.instance = new ParametresJeu();
      }
      return ParametresJeu.instance;
    }



    public definirDifficulte(difficulte: string): void {
      this.difficulte = difficulte;
      console.log(`Difficulté mise à jour : ${this.difficulte}`);
    }
  
    public definirLangue(langue: string): void {
      this.langue = langue;
      console.log(`Langue mise à jour : ${this.langue}`);
    }
  
    public definirVolumeMusique(volume: number): void {
      this.volumeMusique = volume;
      console.log(`Volume de la musique mis à jour : ${this.volumeMusique}`);
    }
  
    public definirVolumeEffetsSonores(volume: number): void {
      this.volumeEffetsSonores = volume;
      console.log(`Volume des effets sonores mis à jour : ${this.volumeEffetsSonores}`);
    }
  
    public definirResolutionEcran(resolution: string): void {
      this.resolutionEcran = resolution;
      console.log(`Résolution de l'écran mise à jour : ${this.resolutionEcran}`);
    }
  
    public definirQualiteGraphique(qualite: string): void {
      this.qualiteGraphique = qualite;
      console.log(`Qualité graphique mise à jour : ${this.qualiteGraphique}`);
    }
  
    public afficherParametres(): void {
      console.log("--- Paramètres du Jeu ---");
      console.log(`Difficulté: ${this.difficulte}`);
      console.log(`Langue: ${this.langue}`);
      console.log(`Volume Musique: ${this.volumeMusique}`);
      console.log(`Volume Effets Sonores: ${this.volumeEffetsSonores}`);
      console.log(`Résolution Écran: ${this.resolutionEcran}`);
      console.log(`Qualité Graphique: ${this.qualiteGraphique}`);
      console.log("------------------------");
    }
  }
  
  const parametres1 = ParametresJeu.getInstance();
  parametres1.definirDifficulte("Difficile");
  parametres1.definirVolumeMusique(0.2);
  parametres1.afficherParametres();
  
  const parametres2 = ParametresJeu.getInstance();
  parametres2.definirLangue("Anglais");
  parametres2.afficherParametres();
  

  console.log(parametres1 === parametres2);
