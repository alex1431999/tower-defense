export abstract class Sprite {
    protected abstract fileName: string

    public image: HTMLImageElement = null

    public async load() {
        this.image = await new Promise(resolve => {
            const image = new Image();
            const url = `/assets/sprites/${this.fileName}`

            image.onload = (() => resolve(image));
            image.src = url;
        });
    }
}